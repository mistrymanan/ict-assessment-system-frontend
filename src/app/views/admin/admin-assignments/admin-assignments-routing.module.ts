import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAssignmentTableComponent } from './admin-assignment-table/admin-assignment-table.component';


const routes: Routes = [{
  path: ':assignmentSlug',
  component: AdminAssignmentTableComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AdminAssignmentsRoutingModule { }
