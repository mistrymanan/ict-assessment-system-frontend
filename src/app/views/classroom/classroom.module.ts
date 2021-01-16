import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomRoutingModule } from './classroom-routing.module';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';


@NgModule({
  declarations: [AddClassroomComponent, InstructorDashboardComponent],
  imports: [
    CommonModule,
    ClassroomRoutingModule
  ]
})
export class ClassroomModule { }
