import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeEditorComponent} from './code-editor.component';
import {CodeEditorRoutingModule} from './code-editor-routing.module';
import {FormsModule} from '@angular/forms';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AceEditorModule} from 'ng2-ace-editor';

// import * as ace from 'ace-builds';


@NgModule({
    declarations: [CodeEditorComponent],
    exports: [
        CodeEditorComponent
    ],
    imports: [
        CommonModule,
        CodeEditorRoutingModule,
        FormsModule,
        TooltipModule.forRoot(),
        FlexLayoutModule,
        AceEditorModule
    ]
})
export class CodeEditorModule { }
