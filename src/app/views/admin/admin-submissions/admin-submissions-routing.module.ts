import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminViewAnswerComponent } from './admin-view-answer/admin-view-answer.component';
import { AdminViewSubmissionsAnswersComponent } from './admin-view-submissions-answers/admin-view-submissions-answers.component';
import { AdminViewSubmissionsComponent } from './admin-view-submissions/admin-view-submissions.component';



const routes: Routes = [
  {
    path: ':assignmentSlug',
    component: AdminViewSubmissionsComponent ,
    data: {
      title: 'admin Submissions'
    }
    },
    {
    path: ':assignmentSlug/answers',
    component: AdminViewSubmissionsAnswersComponent,
    data: {
      title: 'View Submission Answers'
    }
  },
  {
    path: ':assignmentSlug/answers/user',
    component: AdminViewAnswerComponent,
    data: {
      title: 'View Answer'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSubmissionsRoutingModule { }
