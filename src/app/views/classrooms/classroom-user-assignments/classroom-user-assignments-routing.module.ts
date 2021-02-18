import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAssignmentViewComponent } from '../../user-assignments/user-assignment-view/user-assignment-view.component';
import { ViewQuestionComponent } from '../../user-assignments/view-question/view-question.component';


const routes: Routes = [ 
  {
    path: ':slug',
    component: UserAssignmentViewComponent,
    data: {
    title: 'Assignment'
    },
    pathMatch: 'full'
  },
  {
    path: ':assignmentSlug/:questionSlug',
    component: ViewQuestionComponent,
    data: {
    title: 'View Question'
    },
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomUserAssignmentsRoutingModule { }
