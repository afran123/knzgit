import { NgModule }      from '@angular/core'
import { RouterModule,Routes }      from '@angular/router';

import { EmployeeListComponent } from './employee-list.component';
import { DepartmentListComponent } from './department-list.component';
import { KaziComponent } from './kazi.component';
import { EmpStkComponent } from './emp-stk/emp-stk.component';

const routes: Routes = [
    {path: 'departments', component: DepartmentListComponent},
    {path: 'employees', component: EmployeeListComponent},
    {path: 'kazi', component: KaziComponent},
    {path: 'empSticker', component: EmpStkComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
        RouterModule
  ]
  
})


export class AppRoutingModule { }
export const routingComp = [DepartmentListComponent,EmployeeListComponent,KaziComponent,EmpStkComponent]