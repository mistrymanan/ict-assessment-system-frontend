import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { AssignmentDetailsComponent } from './assignment-details/assignment-details.component';


const routes: Routes = [
  {path:'create-assignment',
  component:CreateAssignmentComponent,
    data: {
      title: 'Create Assignment'
    }
  },
    {
      path: ':slug',
      component: AssignmentDetailsComponent,
      data: {
        title: 'Assignment Details'
      }
    },
    {
        path: ':slug/edit',
        component: CreateAssignmentComponent,
        data: {
          title: 'Edit Assignment'
        }
      },
    { 
      path: ':assignmentSlug/add-question',
      component: AddQuestionComponent,
      data: {
        title: 'Add Question'
      }
    },
    {
      path: ':assignmentSlug/:questionSlug/edit',
      component: AddQuestionComponent,
      data: {
        title: 'Edit Question'
      }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomAssignmentsRoutingModule { }
