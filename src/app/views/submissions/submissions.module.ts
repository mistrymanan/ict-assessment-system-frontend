import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { SubmissionsRoutingModule } from './submissions-routing.module';
import {ViewQuestionComponent} from './view-question/view-question.component';
import { ViewSubmissionsComponent } from './view-submissions/view-submissions.component';
import { ViewSubmissionsAnswersComponent } from './view-submissions-answers/view-submissions-answers.component';
import {CodeEditorModule} from '../code-editor/code-editor.module';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import { ViewAnswerComponent } from './view-answer/view-answer.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {AceEditorModule} from 'ng2-ace-editor';
import {MarkdownModule} from 'ngx-markdown';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TooltipModule} from 'ngx-bootstrap/tooltip';



@NgModule({
  declarations: [
      ViewSubmissionsComponent,
      ViewSubmissionsAnswersComponent,
      ViewAnswerComponent,
      ViewQuestionComponent
    ],
    imports: [
        CommonModule,
        SubmissionsRoutingModule,
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
export class SubmissionsModule {
}
