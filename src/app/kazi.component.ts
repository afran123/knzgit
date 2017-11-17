
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

import { DropDown } from './dropdown-class';
import { DropDownService } from './dropdown.service';
import { HeroDD } from './hero-dd';



import { FormGroup, FormControl, Validators } from '@angular/forms';

// displaying modal window.  in app.module declarations , component  ErrorMessage is added.
import { ViewChild } from '@angular/core';
import { ErrorMessage } from './errorMessage';

@Component({
  selector: 'my-kazi',
  templateUrl: './kazi.component.html',
  styleUrls: ['./kazi.component.css'],
  providers: [HeroService, DropDownService]

})



export class KaziComponent implements OnInit {

  // for event emittor.
  showMessage: string;
  onNotifyClicked(message: string): void {
    this.showMessage = message;
  }


  title = 'Tour of Heroes';
  heroes: Hero[];
  heroesCopy: Hero[] = [];
  heroesCopy2: Hero[] = [];


  selectedHero: Hero;
  selectedHeroCopy: Hero;
  heroCopyIndex: number;

  hideForm = false;
  initialName = "Kazin"


  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  Strat - DROPDOWN List @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/
  dropDownTab: DropDown[];
  selectedDDRow: DropDown;
  dropdownIndex: number;
  heroDDList: HeroDD[] = [];
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  END - DROPDOWN List @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/



  kazivalue: any;
  email: any;
  kazisetvalue: any;

  a_name: string;
  a_street: string;
  a_city: string;

  MyName: string;


  constructor(private heroService: HeroService, private dropDownService: DropDownService) { }

  ngOnInit(): void {
    this.getHeroes();
    //this.getDropdownList();
    //  console.log(this.heroes); // undefined.
   };

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }





  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  Strat - DROPDOWN List @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/

  onDropDownTable():void{
    this.populateDDList();
    this.getDropdownList();
  }

  onDiplayDDListValue():void{
    console.log( this.dropDownTab);
  }



  arraysizeDD = 0;
  
  getDropdownList(): void {
    this.dropDownService.getDropDownData().then(dropdownTable => this.dropDownTab = dropdownTable);
  }

  populateDDList(): void {
    this.arraysizeDD = this.heroDDList.length;
    console.log("arraysize2=" + this.arraysizeDD);
    if (this.arraysizeDD == 0) {
      for (let hero12 of this.heroes) {
        this.heroDDList.push({ 'id': hero12.id, 'name': hero12.name });
      }
    } else {
      console.log("DropDown already filled.");
    }
    console.log(this.heroDDList);
  }





  onSelectDDRow(varDDRow: DropDown): void {
    this.selectedDDRow = varDDRow;
    this.dropdownIndex = this.dropDownTab.indexOf(varDDRow);
    console.log(this.dropdownIndex);
    console.log(this.selectedDDRow);
  }
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  END - DROPDOWN List @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/






  // displaying modal window. 
  @ViewChild(ErrorMessage) errorMsg: ErrorMessage;  // ErrorMessage is a ViewChild
  onShowModal() {
    var ErrorPresent = true;
    var MessageDesc = "This is a dummy error message";

    if (ErrorPresent) {
      this.errorMsg.showErrorMessage(MessageDesc);
    }
  }


  userForm = new FormGroup({
    name: new FormControl(this.initialName, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
    })
  })

  onReadValue() {
    this.kazivalue = this.userForm.getRawValue();
    console.log(this.kazivalue);
    var aemal = this.kazivalue.email;
    console.log(aemal);
  }

  onWriteValue() {
    if (this.selectedHero) {
      this.a_street = this.selectedHero.id.toString();
      this.a_name = this.selectedHero.idknz;
      this.a_city = this.selectedHero.nameknz;
      this.kazisetvalue = { name: this.a_name, email: 'zamankn', address: { street: this.a_street, city: this.a_city, postalcode: '12345' } };
    }
    console.log(this.userForm.value)
    this.userForm.setValue(this.kazisetvalue);

  }








  // in thismethod, copy of hero structure is populated 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    // to populate dropdownlist
    this.populateDDList();

    var heroid = this.selectedHero.id;
    console.log("heroid=" + heroid);
    var duplicate = "N";

    for (let hero11 of this.heroesCopy) {
      if (hero11.id == this.selectedHero.id) {
        console.log("Duplicate Hero Record");
        duplicate = "Y";
      }
    }

    if (duplicate == "N") {
      this.heroesCopy.push({ 'id': this.selectedHero.id, 'name': this.selectedHero.name, 'idknz': this.selectedHero.idknz, 'nameknz': this.selectedHero.idknz });
    }

  }


  onSelectherocopy(hero: Hero): void {
    this.selectedHeroCopy = hero;
    this.heroCopyIndex = this.heroesCopy.indexOf(hero);
    //  console.log(this.heroCopyIndex);
    console.log(this.selectedHeroCopy);
  }




  onDeleteCopy() {
    var copyIndex = this.heroCopyIndex;
    var arraysize = this.heroesCopy.length;
    console.log("Index=" + copyIndex);
    console.log("arraysize=" + arraysize);
    if (copyIndex == undefined) {
      console.log("Index is undefined");
    } else if (copyIndex >= arraysize) {
      console.log("Plase select the record to delete");
    } else {
      this.heroesCopy.splice(this.heroCopyIndex, 1);
      this.heroCopyIndex = 99.
    }
  }


  onRefreshHero2() {
    this.heroesCopy2 = this.heroesCopy.concat([]);
  }

  // kazi on 06/10/2017.
  dropdownSel(selval: string) {
    console.log("selected value =" + selval);
  }



}



