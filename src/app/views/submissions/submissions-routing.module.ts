import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewAssignmentsComponent} from '../assignments/view-assignments/view-assignments.component';
import {ViewQuestionComponent} from './view-question/view-question.component';
import {ViewSubmissionsComponent} from './view-submissions/view-submissions.component';
import {ViewSubmissionsAnswersComponent} from './view-submissions-answers/view-submissions-answers.component';
import {ViewAnswerComponent} from './view-answer/view-answer.component';
import {UserAssignmentViewComponent} from './user-assignment-view/user-assignment-view.component';


const routes: Routes = [
  {
    path: '',
    component: ViewQuestionComponent,
    data: {
      title: 'View Question'
    }
  },
  {
    path: 'assignments',
    component: UserAssignmentViewComponent,
    data: {
      title: 'View Question'
    }
  },
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
