import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempComponent } from './temp/temp.component';


const routes: Routes =  [
  {
    path: ':assignmentSlug',
    component: TempComponent,
    data: {
      title: 'View Submissions'
    }
  },
  // {
  //   path: ':assignmentSlug/answers',
  //   component: ViewSubmissionsAnswersComponent,
  //   data: {
  //     title: 'View Submission Answers'
  //   }
  // },
  // {
  //   path: ':assignmentSlug/answers/user',
  //   component: ViewAnswerComponent,
  //   data: {
  //     title: 'View Submission Answer'
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomSubmissionsRoutingModule { }
