import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeEditorComponent} from './code-editor.component';
import {CodeEditorRoutingModule} from './code-editor-routing.module';
import {FormsModule} from '@angular/forms';
import {AceEditorModule} from 'ng2-ace-editor';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TooltipModule} from 'ngx-bootstrap/tooltip';




@NgModule({
  declarations: [CodeEditorComponent],
  imports: [
    CommonModule,
    CodeEditorRoutingModule,
    FormsModule,
    AceEditorModule,
    FlexLayoutModule,
    TooltipModule.forRoot()
  ]
})
export class CodeEditorModule { }
