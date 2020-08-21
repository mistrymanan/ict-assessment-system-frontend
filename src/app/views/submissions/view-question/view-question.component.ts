import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {GlobalConstants} from '../../global-constants';
import {AceEditorComponent} from 'ng2-ace-editor';
import * as ace from 'ace-builds';
@Component({
    selector: 'app-view-question',
    templateUrl: './view-question.component.html',
    styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit, AfterViewInit {
    THEMES;
    LANGUAGES;
    currentLanguage;
    text;
    currentTheme;
    hideInput: boolean;
    hideOutput: boolean;
    markdown;
    @ViewChild('editor') editor: AceEditorComponent;
    constructor() {
        this.hideOutput = true;
        this.hideInput = true;
        this.currentLanguage = 'java';
        this.currentTheme = 'monokai';
        this.THEMES = GlobalConstants.THEMES;
        this.LANGUAGES = GlobalConstants.LANGUAGES;
        this.text = 'public class Hello {\n' +
            '    public static void main(String args[]) {\n' +
            '        System.out.println("Hello world");\n' +
            '    }\n' +
            '}';
        this.markdown = `## Fibonacci Series
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
        const editor = this.editor.getEditor();
        editor.setOption('enableBasicAutoCompletion', true);
        editor.setOption('showPrintMargin', false);
        editor.setOption('wrap', true);
        editor.setFontSize(14);
    }

    ngOnInit(): void {
    }

}
