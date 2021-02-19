import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Classroom'
    },
    children:[
      {path:'add',
      component:AddClassroomComponent,
      data: {
        title: 'Add'
      }},
      {path:':classroomSlug/instructor-dashboard',
      component:InstructorDashboardComponent,
      data: {
        title: 'Instructor-Dashboard'
      }},
      {path:':classroomSlug/assignments',
      loadChildren: () => import('./classroom-assignments/classroom-assignments.module').then(m=>m.ClassroomAssignmentsModule),
      // data: {
      //   title: 'Assignments'
      // }
    },{path:':classroomSlug/submissions',
    loadChildren: () => import('./classroom-submissions/classroom-submissions.module').then(m=>m.ClassroomSubmissionsModule),
    // data: {
    //   title: 'Assignments'
    // }
  },

      //{path: 'assignments',loadChildren: () => import('./classroom-assignments/classroom-assignments.module').then(m=>m.ClassroomAssignmentsModule)}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomsRoutingModule { }
