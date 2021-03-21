import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'classrooms',
    loadChildren: ()=>import('./admin-classrooms/admin-classrooms.module').then(m=>m.AdminClassroomsModule)
  },
  {
    path: 'assignments',
    loadChildren: ()=>import('./admin-assignments/admin-assignments.module').then(m=>m.AdminAssignmentsModule)
  },
  {
    path: 'users',
    loadChildren:()=>import('./admin-users/admin-users.module').then(m=>m.AdminUsersModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
