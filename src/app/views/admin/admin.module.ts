import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DataTablesModule
  ]
})
export class AdminModule { }
