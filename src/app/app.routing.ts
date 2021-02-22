import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import {DefaultLayoutComponent} from './containers';

import {P404Component} from './views/error/404.component';
import {P500Component} from './views/error/500.component';
import {AuthComponent} from './views/auth/auth.component';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
//import { TempComponent } from './views/classroom/temp/temp.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login'])
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthComponent,
    pathMatch: 'full'
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      title: 'Home',
      authGuardPipe: redirectToLogin
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'code-editor',
        loadChildren: () => import('./views/code-editor/code-editor.module').then(m => m.CodeEditorModule)
      },
      // {
      //   path: 'assignments',
      //   loadChildren: () => import('./views/assignments/assignments.module').then(m => m.AssignmentsModule)
      // },
      // {
      //   path: 'submissions',
      //   loadChildren: () => import('./views/submissions/submissions.module').then(m => m.SubmissionsModule)
      // },
      {
        path: 'classrooms',
        loadChildren: () => import('./views/classrooms/classrooms.module').then(m => m.ClassroomsModule)
      },
    
      //{
      //   path: 'classroom/temp',
      //   component: TempComponent,
      //   data: {
      //     title: 'add people'
      //   },
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'classroom/temp',
      //   component: TempComponent,
      //   data: {
      //     title: 'add people'
      //   },
      //   pathMatch: 'full'
      // },
      // {
      //   path: ':slug',
      //   component: UserAssignmentViewComponent,
      //   data: {
      //     title: 'Assignment'
      //   },
      //   pathMatch: 'full'
      // },
      // {
      //   path: ':assignmentSlug/:questionSlug',
      //   component: ViewQuestionComponent,
      //   data: {
      //     title: 'View Question'
      //   },
      //   pathMatch: 'full'
      // },
      

    ]
  },
  {path: '**', component: P404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
