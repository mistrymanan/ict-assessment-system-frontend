import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs'

import { AdminClassroomsRoutingModule } from './admin-classrooms-routing.module';
import { AdminClassroomTableComponent } from './admin-classroom-table/admin-classroom-table.component';
import { AdminClassroomDetailComponent } from './admin-classroom-detail/admin-classroom-detail.component';


@NgModule({
  declarations: [AdminClassroomTableComponent, AdminClassroomDetailComponent],
  imports: [
    CommonModule,
    AdminClassroomsRoutingModule,TabsModule
  ]
})
export class AdminClassroomsModule { }
