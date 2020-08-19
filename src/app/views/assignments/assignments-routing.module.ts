import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAssignmentComponent} from './create-assignment/create-assignment.component';
import {AllAssignmentsComponent} from './all-assignments/all-assignments.component';
import {ViewAssignmentsComponent} from './view-assignments/view-assignments.component';
import {AddQuestionComponent} from './add-question/add-question.component';


const routes: Routes = [
  {
    path: '',
    component: ViewAssignmentsComponent,
    data: {
      title: 'View Assignments'
    }
  },
  {
    path: 'all',
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
  },
  {
    path: 'add-question',
    component: AddQuestionComponent,
    data: {
      title: 'Add Question'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }
