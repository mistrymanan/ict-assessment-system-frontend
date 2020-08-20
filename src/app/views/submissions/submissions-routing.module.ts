import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewSubmissionsComponent} from './view-submissions/view-submissions.component';
import {ViewSubmissionsAnswersComponent} from './view-submissions-answers/view-submissions-answers.component';


const routes: Routes = [
  {
    path: ':id',
    component: ViewSubmissionsComponent,
    data: {
      title: 'View Submissions'
    }
  },
  {
    path: ':id/answers',
    component: ViewSubmissionsAnswersComponent,
    data: {
      title: 'View Submission Answers'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionsRoutingModule { }
