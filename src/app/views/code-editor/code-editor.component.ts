import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {GlobalConstants} from '../../global-constants';
import {ExecutionService} from '../../services/execution.service';
import {Program} from '../../models/program';
// import 'ace-builds/src-noconflict/theme-monokai';
// import 'ace-builds/src-noconflict/mode-java';
// import 'ace-builds/src-noconflict/ext-language_tools';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit, AfterViewInit {

  @ViewChild('editor') editor;
  private codeEditor;
  currentTheme: string;
  currentLanguage: string;
  text: string;
  stdout: string;
  stdin: string;
  program: Program;
  processing: boolean;
  error: boolean;
  THEMES;
  LANGUAGES;
  langModes: Map<string, string>;
  // THEMES = [
  //   {name: 'Chrome', value: 'chrome'},
  //   {name: 'Eclipse', value: 'eclipse'},
  //   {name: 'Github', value: 'github'},
  //   {name: 'XCode', value: 'xcode'},
  //   {name: 'Dracula', value: 'dracula'},
  //   {name: 'Monokai', value: 'monokai'},
  //   {name: 'Twilight', value: 'twilight'},
  // ];
  // LANGUAGES = [
  //   {name: 'Java', value: 'java'},
  //   {name: 'Python 3.8', value: 'python'},
  //   {name: 'C', value: 'c_cpp'},
  //   {name: 'C++', value: 'c_cpp'},
  // ];
  constructor(private executionService: ExecutionService) {
    this.program = new Program();
    this.THEMES = GlobalConstants.THEMES;
    this.LANGUAGES = GlobalConstants.LANGUAGES;
    this.langModes = GlobalConstants.langModes;
    this.currentTheme = 'monokai';
    this.currentLanguage = 'java';
    this.processing= false;
    this.error=false;
    this.stdin = '';
    this.text = 'public class Solution {\n' +
        '    public static void main(String args[]) {\n' +
        '        System.out.println("Hello world");\n' +
        '    }\n' +
        '}';
  }

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-const
  }

  load(): void{
    if (localStorage.getItem('code')){
      this.text= localStorage.getItem('code');
    }
  }

  save(): void{
    console.log(this.text);
    localStorage.setItem('code', this.text);
  }

  run(): void {
    this.processing=true;
    this.program.source_code = this.text;
    this.program.input =this.stdin;
    this.program.language = this.currentLanguage;
    this.executionService.runProgram(this.program).subscribe(
      res => {
        this.stdout = res.output;
        this.error= res.status === 'SUCCEED' ? false : true
        this.processing=false; 
      }
    );
  
  }

  ngAfterViewInit(): void {
    this.codeEditor = this.editor.getEditor();
    this.codeEditor.setOption('enableLiveAutoCompletion', true);
    this.codeEditor.setOption('showPrintMargin', false);
    // this.codeEditor.session.setMode('ace/mode/java');
    this.codeEditor.setFontSize(16);
    // this.codeEditor.session.on('change', (d) => {
    //   // this.theme = 'eclipse';
    //   this.text = this.codeEditor.getValue();
    // });

  }


}
