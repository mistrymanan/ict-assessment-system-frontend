import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewAssignmentsComponent} from '../assignments/view-assignments/view-assignments.component';
import {ViewQuestionComponent} from './view-question/view-question.component';


const routes: Routes = [
  {
    path: '',
    component: ViewQuestionComponent,
    data: {
      title: 'View Question'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionsRoutingModule { }
