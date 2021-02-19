import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomUserAssignmentsRoutingModule } from './classroom-user-assignments-routing.module';
import { UserAssignmentViewComponent } from './user-assignment-view/user-assignment-view.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AceEditorModule } from 'ng2-ace-editor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MarkdownModule } from 'ngx-markdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { UserSubmissionsComponent } from './user-submissions/user-submissions.component';


@NgModule({
  declarations: [UserAssignmentViewComponent, ViewQuestionComponent, UserSubmissionsComponent],
  imports: [
    CommonModule,
    ClassroomUserAssignmentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AceEditorModule,
    FlexLayoutModule,
    MarkdownModule,
    CollapseModule,
    TooltipModule
  ]
})
export class ClassroomUserAssignmentsModule { }
