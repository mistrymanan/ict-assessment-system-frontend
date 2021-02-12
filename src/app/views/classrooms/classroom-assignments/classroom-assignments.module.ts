import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomAssignmentsRoutingModule } from './classroom-assignments-routing.module';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AssignmentDetailsComponent } from './assignment-details/assignment-details.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AceEditorModule } from 'ng2-ace-editor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MarkdownModule } from 'ngx-markdown';
import { SubmissionsRoutingModule } from '../../submissions/submissions-routing.module';
import { CodeEditorModule } from '../../code-editor/code-editor.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [CreateAssignmentComponent, AddQuestionComponent, AssignmentDetailsComponent],
  imports: [
    CommonModule,
    ClassroomAssignmentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AceEditorModule,
    FlexLayoutModule,
    MarkdownModule,
    CommonModule,
    CodeEditorModule,
    CollapseModule,
    TooltipModule
  ]
})
export class ClassroomAssignmentsModule { }