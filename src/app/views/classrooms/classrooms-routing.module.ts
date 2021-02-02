import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';


const routes: Routes = [
  {path:'add',component:AddClassroomComponent},
  {path: ':classroomSlug/instructor-dashboard', component:InstructorDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomsRoutingModule { }
