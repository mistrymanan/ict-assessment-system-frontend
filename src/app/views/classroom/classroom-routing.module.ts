import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';


const routes: Routes = [
  {
    path: 'add',
    component: AddClassroomComponent,
    data: {
      title: 'Add Classroom'
    }
  },
  // {
  //   path: '/temp',
  //   component: AddClassroomComponent,
  //   data: {
  //     title: 'Temp Classroom'
  //   }
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule { }
