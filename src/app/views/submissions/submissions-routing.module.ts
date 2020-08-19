import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewSubmissionsComponent} from './view-submissions/view-submissions.component';


const routes: Routes = [
  {
    path: ':id',
    component: ViewSubmissionsComponent,
    data: {
      title: 'View Assignments'
    }

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionsRoutingModule { }
