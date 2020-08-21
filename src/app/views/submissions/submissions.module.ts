import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SubmissionsRoutingModule} from './submissions-routing.module';
import {ViewQuestionComponent} from './view-question/view-question.component';
import {FormsModule} from '@angular/forms';
import {AceEditorModule} from 'ng2-ace-editor';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {MarkdownModule} from 'ngx-markdown';
import {CollapseModule} from 'ngx-bootstrap/collapse';


@NgModule({
    declarations: [ViewQuestionComponent],
    imports: [
        CommonModule,
        FormsModule,
        AceEditorModule,
        FlexLayoutModule,
        TooltipModule.forRoot(),
        SubmissionsRoutingModule,
        MarkdownModule,
        CollapseModule
    ]
})
export class SubmissionsModule {
}
