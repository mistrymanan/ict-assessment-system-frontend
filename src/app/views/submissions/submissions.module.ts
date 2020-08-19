import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionsRoutingModule } from './submissions-routing.module';
import { ViewSubmissionsComponent } from './view-submissions/view-submissions.component';
import { ViewSubmissionsAnswersComponent } from './view-submissions-answers/view-submissions-answers.component';


@NgModule({
  declarations: [ViewSubmissionsComponent, ViewSubmissionsAnswersComponent],
  imports: [
    CommonModule,
    SubmissionsRoutingModule
  ]
})
export class SubmissionsModule { }
