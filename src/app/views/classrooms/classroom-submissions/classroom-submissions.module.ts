import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSubmissionsAnswersComponent } from './view-submissions-answers/view-submissions-answers.component';
import { ViewSubmissionsComponent } from './view-submissions/view-submissions.component';
import { ViewAnswerComponent } from '../../submissions/view-answer/view-answer.component';
import { ClassroomSubmissionsRoutingModule } from './classroom-submissions-routing.module';
import { CodeEditorModule } from '../../code-editor/code-editor.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { AceEditorModule } from 'ng2-ace-editor';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TooltipModule } from 'ngx-bootstrap/tooltip';



@NgModule({
  declarations: [ViewSubmissionsAnswersComponent, ViewSubmissionsComponent, ViewAnswerComponent],
  imports: [
    CommonModule,
    ClassroomSubmissionsRoutingModule,
    CodeEditorModule,
    CollapseModule,
    NgSelectModule,
    AceEditorModule,
    MarkdownModule,
    FormsModule,
    FlexLayoutModule,
    TooltipModule
  ]
})
export class ClassroomSubmissionsModule { }