import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomRoutingModule } from './classroom-routing.module';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';
//import { TempComponent } from './temp/temp.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';


// @NgModule({
//   declarations: [AddClassroomComponent, TempComponent],


@NgModule({
  declarations: [AddClassroomComponent, InstructorDashboardComponent,TempComponent],
  imports: [
    CommonModule,
    ClassroomRoutingModule
  ]
})
export class ClassroomModule { }
