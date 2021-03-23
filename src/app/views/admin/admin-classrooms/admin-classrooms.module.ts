import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminClassroomsRoutingModule } from './admin-classrooms-routing.module';
import { AdminClassroomTableComponent } from './admin-classroom-table/admin-classroom-table.component';
import { ClassroomDetailsComponent } from './classroom-details/classroom-details.component';


@NgModule({
  declarations: [AdminClassroomTableComponent, ClassroomDetailsComponent],
  imports: [
    CommonModule,
    AdminClassroomsRoutingModule
  ]
})
export class AdminClassroomsModule { }
