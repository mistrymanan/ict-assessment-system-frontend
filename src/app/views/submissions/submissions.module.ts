import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionsRoutingModule } from './submissions-routing.module';
import { ViewSubmissionsComponent } from './view-submissions/view-submissions.component';
import { ViewSubmissionsAnswersComponent } from './view-submissions-answers/view-submissions-answers.component';
import {CodeEditorModule} from '../code-editor/code-editor.module';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import { ViewAnswerComponent } from './view-answer/view-answer.component';


@NgModule({
  declarations: [ViewSubmissionsComponent, ViewSubmissionsAnswersComponent, ViewAnswerComponent],
  imports: [
    CommonModule,
    SubmissionsRoutingModule,
    CodeEditorModule,
    CollapseModule
  ]
})
export class SubmissionsModule { }
