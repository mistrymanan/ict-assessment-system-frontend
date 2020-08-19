import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAssignmentComponent} from './create-assignment/create-assignment.component';
import {AllAssignmentsComponent} from './all-assignments/all-assignments.component';


const routes: Routes = [
  {
    path: '',
    component: AllAssignmentsComponent,
    data: {
      title: 'Assignment'
    }
  },
  {
    path: 'create',
    component: CreateAssignmentComponent,
    data: {
      title: 'Create Assignment'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }
