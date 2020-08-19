import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentsRoutingModule } from './assignments-routing.module';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { AllAssignmentsComponent } from './all-assignments/all-assignments.component';
import {AceEditorModule} from 'ng2-ace-editor';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MarkdownModule} from 'ngx-markdown';
import {FormsModule} from '@angular/forms';
// import * as ace from 'ace-builds'
// import 'ace-builds/webpack-resolver';

@NgModule({
  declarations: [CreateAssignmentComponent, AllAssignmentsComponent],
  imports: [
    CommonModule,
    AssignmentsRoutingModule,
    AceEditorModule,
    FlexLayoutModule,
    MarkdownModule,
      FormsModule
  ]
})
export class AssignmentsModule { }
