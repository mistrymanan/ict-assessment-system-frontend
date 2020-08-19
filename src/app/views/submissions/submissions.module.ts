import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionsRoutingModule } from './submissions-routing.module';
import { ViewSubmissionsComponent } from './view-submissions/view-submissions.component';


@NgModule({
  declarations: [ViewSubmissionsComponent],
  imports: [
    CommonModule,
    SubmissionsRoutingModule
  ]
})
export class SubmissionsModule { }
