import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomAssignmentsRoutingModule } from './classroom-assignments-routing.module';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateAssignmentComponent],
  imports: [
    CommonModule,
    ClassroomAssignmentsRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class ClassroomAssignmentsModule { }