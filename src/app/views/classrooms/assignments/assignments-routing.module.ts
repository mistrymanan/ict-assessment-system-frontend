import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';


const routes: Routes = [
  {path: 'create-assignment',component:CreateAssignmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }
