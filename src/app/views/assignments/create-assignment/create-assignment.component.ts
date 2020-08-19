import {Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef} from '@angular/core';
import {AceEditorComponent} from 'ng2-ace-editor';
import * as ace from 'ace-builds';
// import * as ace from 'ace-builds';
// import 'ace-builds/webpack-resolver';
@Component({
    selector: 'app-create-assignment',
    templateUrl: './create-assignment.component.html',
    styleUrls: ['./create-assignment.component.css']
})
export class CreateAssignmentComponent implements OnInit {

    text: string;
    solutionLanguage: string;

    @ViewChildren(AceEditorComponent) editors: QueryList<AceEditorComponent>;
    // @ViewChild('markdownEditor') markdownEditor: AceEditorComponent;
    // @ViewChild('solutionEditor') solutionEditor: AceEditorComponent;
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
`
    }

    ngOnInit(): void {

    }
    ngAfterViewInit(): void {
        ace.require('ace/ext-language_tools');
        this.editors.forEach(editorRef => {
            const editor = editorRef.getEditor();
            editor.setOption('enableLiveAutoCompletion', true);
            editor.setOption('showPrintMargin', false);
            editor.setFontSize(16);
        });
        // const markdown = this.markdownEditor.getEditor();
        // markdown.setOption('enableLiveAutoCompletion', true);
        // markdown.setOption('showPrintMargin', false);
        // markdown.setFontSize(16);
        // const solution = this.solutionEditor.getEditor();
        // solution.setOption('enableLiveAutoCompletion', true);
        // solution.setOption('showPrintMargin', false);
        // solution.setFontSize(16);
    }


}
