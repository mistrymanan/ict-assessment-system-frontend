import {Component, OnInit, ViewChildren, AfterViewInit, QueryList} from '@angular/core';
import {AceEditorComponent} from 'ng2-ace-editor';
import * as ace from 'ace-builds';

@Component({
    selector: 'app-add-question',
    templateUrl: './add-question.component.html',
    styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
    LANGUAGES = [
        {name: 'Java', value: 'java'},
        {name: 'Python 3.8', value: 'python'},
        {name: 'C', value: 'c_cpp'},
        {name: 'C++', value: 'c_cpp'},
    ];
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

    ngAfterViewInit(): void {
        ace.require('ace/ext-language_tools');
        this.editors.forEach(editorRef => {
            const editor = editorRef.getEditor();
            editor.setOption('enableLiveAutoCompletion', true);
            editor.setOption('showPrintMargin', false);
            editor.setOption('wrap', true);
            editor.setFontSize(14);
        });
    }

    ngOnInit(): void {
    }

}
