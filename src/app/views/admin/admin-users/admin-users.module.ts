import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUsersRoutingModule } from './admin-users-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    AdminUsersRoutingModule
  ]
})
export class AdminUsersModule { }
