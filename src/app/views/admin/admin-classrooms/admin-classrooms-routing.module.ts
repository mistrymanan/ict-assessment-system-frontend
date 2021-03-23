import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminClassroomTableComponent } from './admin-classroom-table/admin-classroom-table.component';
import { ClassroomDetailsComponent } from './classroom-details/classroom-details.component';


const routes: Routes = [
   {
     path:'',
     component:AdminClassroomTableComponent
  },
  {
    path:'classroomslug',
    component:ClassroomDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminClassroomsRoutingModule { }
