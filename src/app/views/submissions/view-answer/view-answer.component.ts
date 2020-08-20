import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AceEditorComponent} from 'ng2-ace-editor';
import * as ace from 'ace-builds';
import {edit} from 'ace-builds';
@Component({
  selector: 'app-view-answer',
  templateUrl: './view-answer.component.html',
  styleUrls: ['./view-answer.component.css']
})
export class ViewAnswerComponent implements OnInit {
  solutionLanguage: string;
  text: string;
  @ViewChildren(AceEditorComponent) editors: QueryList<AceEditorComponent>;
  constructor() {
    this.solutionLanguage = 'java';
    this.text = `## Fibonacci Series
---
Write a Program to Print Fibonacci Series upto Nth Fibonacci Number.

\` 1 1 2 3 5 8 13 ...\`

__Sample Input__

    6
__Sample Output__

    1 1 2 3 5 8
`;
  }

  ngOnInit(): void {
    ace.require('ace/ext-language_tools');
    this.editors.forEach(editorRef => {
      const editor = editorRef.getEditor();
      editor.setOption('enableLiveAutoCompletion', true);
      editor.setOption('showPrintMargin', false);
      editor.setOption('wrap', true);
      editor.setFontSize(14);
    });
  }

}
