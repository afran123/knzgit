import { Component, OnInit } from '@angular/core';
import { StickerList } from './sticker_list_class';
import { EmpStickerService } from './emp-stk-serv.service';

import { VehType } from './veh_type_class';
import { ReqType } from './req_type_class';

import { VehMake } from './veh_make_class';
import { VehModel } from './veh_model_class';
import { VehPlateDD } from './veh_plate_dd_class';



@Component({
  selector: 'app-emp-stk',
  templateUrl: './emp-stk.component.html',
  styleUrls: ['./emp-stk.component.css'],
  providers: [EmpStickerService]
})


export class EmpStkComponent implements OnInit {


  // empTable: Emptab[];
  // selectedEmp: Emptab;

  // empTable2: Emptab[] = [];
  //  selectedEmp2: Emptab;

  hide_block1: Boolean;
  hide_block2: Boolean;
  hide_block3: Boolean;
  hide_block4: Boolean;
  hide_block5: Boolean;
  hide_block6: Boolean;

  StickerListTab: StickerList[] = [];
  selectedStkList: StickerList;
  


  // constant Table values.
  VehStickerTab: any[] = [];
  VehStickerItem: any = '';

  VehTypeTab: VehType[] = [];
  selVehTypeTab: VehType;

  ReqTypeTab: ReqType[] = [];
  selReqTypeTab: ReqType;

  VehMakeTab: VehMake[] = [];
  selVehMakeTab: VehMake;

  VehModelTab: VehModel[] = [];
  selVehModelTab: VehModel;

  VehPlateDDTab: VehPlateDD[] = [];
  selVehPlateDDTab: VehPlateDD;
 


  out_hizra_dd:String = '';
  out_hizra_mm:String = '';
  out_hizra_yy:String = '';
  

  hide_tab1: Boolean;
  hide_tab2: Boolean;
  hide_tab3: Boolean;


  constructor(private empStkService: EmpStickerService) { }


  ngOnInit() {
    this.hide_block1 = false;
    this.hide_block2 = true;
    this.hide_block3 = false;
    this.hide_block4 = true;
    this.hide_block5 = true;
    this.hide_block6 = true;

    this.hide_tab1 = false;
    this.hide_tab2 = true;
    this.hide_tab3 = true;

  }



  onHomeTab() {
        this.hide_tab1 = false;
    this.hide_tab2 = true;
    this.hide_tab3 = true;
    console.log("onHomeTab clicked.");
  }
  onContactTab() {
        this.hide_tab1 = true;
    this.hide_tab2 = false;
    this.hide_tab3 = true;
    console.log("onContactTab clicked.");
  }
  onLocationTab() {
          this.hide_tab1 = true;
    this.hide_tab2 = true;
    this.hide_tab3 = false;
    console.log("onlocation clicked.");
  }



  onShowActive() {
    console.log("Active clicked.");
    this.getActiveList();
  }

  onShowInProcess() {
    console.log("InProcess clicked.");
  }

  onShowNew() {
    console.log("NEW clicked.");
  }


  getActiveList(): void {
    this.hide_block2 = false;
    this.empStkService.getEmpStickerList().then(
      heroes => this.StickerListTab = heroes
    );
    console.log (this.StickerListTab);
  }

    onSelectStkList(hero: StickerList): void {
     this.selectedStkList = hero;
     console.log (this.selectedStkList);
     // this.selectedColor = true;
   }



  onShowStkDtl():void {
    this.hide_block3 = false;
    this.getDDTables();
   // this.VehTypeTab = this.VehStickerTab.Veh_Type_Rfc;
  //  this.ReqTypeTab = this.VehStickerTab.Req_Type_Rfc;
  //  console.log (this.VehTypeTab);
 //   console.log (this.ReqTypeTab);



  }

// DD Tables.
  getDDTables(): void {
    this.empStkService.getstickerDDList().then(
      heroes => this.VehStickerTab = heroes
     //  heroes => console.log(heroes)
    );
    this.VehStickerItem = this.VehStickerTab[0];

    this.VehTypeTab = this.VehStickerItem.Veh_Type_Rfc;
    this.ReqTypeTab = this.VehStickerItem.Req_Type_Rfc;

    this.VehStickerTab = this.VehStickerItem.Req_Type_Rfc;
    this.VehMakeTab = this.VehStickerItem.Veh_Make_Rfc;
    this.VehModelTab = this.VehStickerItem.Veh_Model_Rfc;
    this.VehPlateDDTab = this.VehStickerItem.Veh_Plate_DD_Rfc;





   // this.VehStickerItem = this.VehStickerTab[0];
   // console.log (this.VehStickerItem);
   // this.VehTypeTab = this.VehStickerItem.Veh_Type_Rfc;
   // this.ReqTypeTab = this.VehStickerItem.Req_Type_Rfc;

    console.log (this.VehTypeTab);
    console.log (this.ReqTypeTab);

    this.out_hizra_dd = this.VehStickerItem.hizra_dd;
    this.out_hizra_mm = this.VehStickerItem.hizra_mm;
    this.out_hizra_yy = this.VehStickerItem.hizra_yy;
    console.log ("Hijra Year=" + this.out_hizra_yy);


  }


   // getHero(id: number) {
  //  return this.http.get("hero.json")
  //                  .map(res => <Hero> res.json().data.filter(hero => hero.id === id)[0])
  //                  .do(data => console.log(data)) // eyeball results in the console
  //                  .catch(this.handleError);
 // }



}
