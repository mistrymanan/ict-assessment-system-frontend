import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAssignmentsRoutingModule } from './admin-assignments-routing.module';
import { AdminAssignmentTableComponent } from './admin-assignment-table/admin-assignment-table.component';


@NgModule({
  declarations: [AdminAssignmentTableComponent],
  imports: [
    CommonModule,
    AdminAssignmentsRoutingModule
  ]
})
export class AdminAssignmentsModule { }
