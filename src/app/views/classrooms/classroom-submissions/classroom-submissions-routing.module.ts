import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewSubmissionsAnswersComponent } from './view-submissions-answers/view-submissions-answers.component';
import { ViewSubmissionsComponent } from './view-submissions/view-submissions.component';
import {ViewAnswerComponent} from './view-answer/view-answer.component';
import { ViewPlagiarismsComponent } from './view-plagiarisms/view-plagiarisms.component';
import { data } from 'jquery';
import { match } from 'assert';
import { ViewPlagiarismResultsComponent } from './view-plagiarism-results/view-plagiarism-results.component';


const routes: Routes = [
  {
    path: ':assignmentSlug',
    component: ViewSubmissionsComponent,
    data: {
      title: 'View Submissions'
    }
  },
  {
    path: 'plagiarisms/:assignmentId/:questionId',
    component: ViewPlagiarismsComponent,
    data:{
      title: 'Plagiarism Reports'
    },
  },
  {
    path: 'plagiarisms/:plagiarismId',
    component: ViewPlagiarismResultsComponent,
    data: {
      title: 'Plagiarism Report'
    }
  }
  ,
  {
    path: ':assignmentSlug/answers',
    component: ViewSubmissionsAnswersComponent,
    data: {
      title: 'View Submission Answers'
    }
  },
  {
    path: ':assignmentSlug/answers/user',
    component: ViewAnswerComponent,
    data: {
      title: 'View Answer'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomSubmissionsRoutingModule { }
