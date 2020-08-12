import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/webpack-resolver';
@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('editor') editor;
  private codeEditor;
  theme: string;
  text: string;
  constructor() {
    this.theme = 'monokai';
    this.text = 'public class Hello {\n' +
        '    public static void main(String args[]) {\n' +
        '        System.out.println("Hello world");\n' +
        '    }\n' +
        '}';
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.codeEditor = this.editor.getEditor();
    ace.require('ace/ext-language_tools');
    this.codeEditor.setOption('enableLiveAutocompletion', true);
    this.codeEditor.setOption('showPrintMargin', false);
    this.codeEditor.session.setMode('ace/mode/java');
    this.codeEditor.setFontSize(16);
    this.codeEditor.session.on('change', (d) => {
      // this.theme = 'eclipse';
      this.text = this.codeEditor.getValue();
    });

  }


}
