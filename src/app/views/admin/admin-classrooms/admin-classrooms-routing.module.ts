import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminClassroomDetailComponent } from './admin-classroom-detail/admin-classroom-detail.component';
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
  },
  {

    path:'',
    component:AdminClassroomTableComponent
  },
  {
    path:':classroomSlug',
    component:AdminClassroomDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminClassroomsRoutingModule { }
