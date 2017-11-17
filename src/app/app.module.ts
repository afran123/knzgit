import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule }      from '@angular/router';
import { AppRoutingModule}  from './app-routing.module';
import { routingComp}      from './app-routing.module';
import { AppComponent }  from './app.component';

import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HeroDetailComponent } from './hero-detail.component';

// to be added for model driven form -kazi
import {ReactiveFormsModule} from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {ErrorMessage} from './errorMessage';
import { EmpStkComponent } from './emp-stk/emp-stk.component';

//import { CUSTOM_ELEMENTS_SCHEMA } from '@NgModule.schemas';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
   FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    routingComp,
    ErrorMessage,
    EmpStkComponent
  ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }

