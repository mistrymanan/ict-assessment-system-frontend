import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSubmissionsRoutingModule } from './admin-submissions-routing.module';
import { AdminViewSubmissionsAnswersComponent } from './admin-view-submissions-answers/admin-view-submissions-answers.component';
import { AdminViewSubmissionsComponent } from './admin-view-submissions/admin-view-submissions.component';
import { AdminViewAnswerComponent } from './admin-view-answer/admin-view-answer.component';
import { CodeEditorModule } from '../../code-editor/code-editor.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgSelectModule } from '@ng-select/ng-select';
import { AceEditorModule } from 'ng2-ace-editor';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TooltipModule } from 'ngx-bootstrap/tooltip';




@NgModule({
  declarations: [AdminViewSubmissionsAnswersComponent, AdminViewSubmissionsComponent, AdminViewAnswerComponent],
  imports: [
    CommonModule,
    AdminSubmissionsRoutingModule,
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
export class AdminSubmissionsModule { }
