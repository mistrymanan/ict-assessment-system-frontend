import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomsRoutingModule } from './classrooms-routing.module';
import { AddClassComponent } from './add-class/add-class.component';


@NgModule({
  declarations: [AddClassComponent],
  imports: [
    CommonModule,
    ClassroomsRoutingModule
  ]
})
export class ClassroomsModule { }
