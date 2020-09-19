import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAssignmentComponent} from './create-assignment/create-assignment.component';
import {ViewAssignmentsComponent} from './view-assignments/view-assignments.component';
import {AddQuestionComponent} from './add-question/add-question.component';
import { AssignmentDetailsComponent } from './assignment-details/assignment-details.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Assignments'
    },
    children: [
      {
        path: '',
        component: ViewAssignmentsComponent,
        data: {
          title: 'All'
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
        path: ':slug/add-question',
        component: AddQuestionComponent,
        data: {
          title: 'Add Question'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }
