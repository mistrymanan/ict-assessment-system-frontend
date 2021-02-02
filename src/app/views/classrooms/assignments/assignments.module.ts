import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentsRoutingModule } from './assignments-routing.module';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';


@NgModule({
  declarations: [CreateAssignmentComponent],
  imports: [
    CommonModule,
    AssignmentsRoutingModule
  ]
})
export class AssignmentsModule { }
