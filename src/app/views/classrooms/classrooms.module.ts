import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomsRoutingModule } from './classrooms-routing.module';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { TabsModule } from 'ngx-bootstrap/tabs'
import { ModalModule } from 'ngx-bootstrap/modal';
import { TempComponent } from './classroom-submissions/temp/temp.component';

@NgModule({
  declarations: [AddClassroomComponent, InstructorDashboardComponent, TempComponent],
  imports: [
    CommonModule,
    ClassroomsRoutingModule,
    FormsModule,ReactiveFormsModule,TabsModule,ModalModule
  ]
})
export class ClassroomsModule { }
