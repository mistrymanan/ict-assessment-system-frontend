import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminClassroomTableComponent } from './admin-classroom-table/admin-classroom-table.component';


const routes: Routes = [
  {
    path:'',
    component:AdminClassroomTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminClassroomsRoutingModule { }
