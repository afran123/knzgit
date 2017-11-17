
import { Component, OnInit } from '@angular/core';
import { Emptab } from './table-class';
import { TableService } from './table.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';




@Component({
    selector: 'departments',
    templateUrl: './department-list.component.html',
    styleUrls: ['./department-list.component.css'],
    providers: [TableService]

})

export class DepartmentListComponent implements OnInit {

    empTable: Emptab[];
    selectedEmp: Emptab;


   // rows = [];

    selected = [];

  //  columns: any[] = [
    //    { name: 'name' },
    //    { position: 'position' },
    //    { office: 'office' },
    //    { ext: 'ext' },
    //    { startDate: 'startDate' },
    //    { salary: 'salary' }
    //];


  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
    { name: 'MollyA', gender: 'FemaleA', company: 'Burger KingA' },
    { name: 'MollyB', gender: 'FemaleB', company: 'Burger KingB' },
    { name: 'MollyC', gender: 'FemaleC', company: 'Burger KingC' },
  ];

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];


    constructor(private tableService: TableService) { }

    ngOnInit(): void {
  //      this.getEmployeeList();
    }

 //   getEmployeeList(): void {
 //       this.tableService.getEmpData().then(heroes => this.rows = heroes);
 //   }



    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);

        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    onActivate(event) {
        console.log('Activate Event', event);
    }












}
