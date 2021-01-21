import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AddClassComponent } from './add-class/add-class.component';


const routes: Routes = [
  //{path: 'add',component:AddClassComponent} in this way you just have to add your components eg this commponent will be accessible at cl/add
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomsRoutingModule { }
