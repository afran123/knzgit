import { Component, OnInit } from '@angular/core';
import { Emptab } from './table-class';
import { TableService } from './table.service';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css'],
    providers: [TableService]

})

export class EmployeeListComponent implements OnInit {

    empTable: Emptab[];
    selectedEmp: Emptab;
    
    empTable2: Emptab[] = [];
    selectedEmp2: Emptab;


    selectedColor = false;
    selectedColor2 = false;

    constructor(private tableService: TableService) { }

    ngOnInit(): void {
        this.getEmployeeList();
    }

    getEmployeeList(): void {
        this.tableService.getEmpData().then(
            heroes => this.empTable = heroes
            
            );
    }

    onSelect(hero: Emptab): void {
     this.selectedEmp = hero;
      this.selectedColor = true;
   }

   onPopulateTable2(){
       this.empTable2 = this.empTable.concat([]);
   }
    onSelect2(hero: Emptab): void {
     this.selectedEmp2 = hero;
     this.selectedColor2 = true;
   }
   onConsoleLog(){
       console.log(this.empTable2);
   }

}

