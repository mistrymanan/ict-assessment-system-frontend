import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewSubmissionsComponent} from './view-submissions/view-submissions.component';
import {ViewSubmissionsAnswersComponent} from './view-submissions-answers/view-submissions-answers.component';
import {ViewAnswerComponent} from './view-answer/view-answer.component';


const routes: Routes = [
  {
    path: ':assignmentId/question/:questionId',
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
  },
  {
    path: ':id/answers/:answer_id',
    component: ViewAnswerComponent,
    data: {
      title: 'View Submission Answer'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionsRoutingModule { }
