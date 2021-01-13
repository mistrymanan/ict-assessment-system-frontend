import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomRoutingModule } from './classroom-routing.module';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';


@NgModule({
  declarations: [AddClassroomComponent],
  imports: [
    CommonModule,
    ClassroomRoutingModule
  ]
})
export class ClassroomModule { }
