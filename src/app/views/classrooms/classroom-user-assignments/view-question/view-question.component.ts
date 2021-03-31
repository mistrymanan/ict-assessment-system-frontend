import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {GlobalConstants} from '../../../../global-constants';
import {AceEditorComponent} from 'ng2-ace-editor';
import {AssignmentsService} from '../../../../services/assignments.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserQuestion} from '../../../../models/user-question';
import {SubmissionService} from '../../../../services/submission.service';
import {RunCodeRequest} from '../../../../models/run-code-request';
import {RunCodeResponse} from '../../../../models/run-code-response';
import {SubmitCodeRequest} from '../../../../models/submit-code-request';
import {SubmitCodeResponse} from '../../../../models/submit-code-response';

import {Location} from '@angular/common';
import { AuthService } from '../../../../services/auth.service';
import { BuildService } from '../../../../services/build.service';
import { ThemeService } from 'ng2-charts';

class TestCaseResult {
  id: string|number;
  status: string;
  reason: string;
}

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit, AfterViewInit {
  THEMES;
  LANGUAGES;
  currentLanguage;
  sourceCode;
  currentTheme;
  hideInput: boolean;
  hideOutput: boolean;
  markdown;
  allowedLanguages;
  langMap;
  assignmentId: string;
  questionId:string;
  input: string;
  emailId:string;
  runRodeResponse: RunCodeResponse = new RunCodeResponse();
  submitCodeResponse: SubmitCodeResponse;
  testResults: TestCaseResult[];
  showAssessmentResults: boolean = false;
  currentQuestion: UserQuestion = new UserQuestion();
  runCodeProcess: boolean = false;
  submitProcess: boolean = false;
  totalPassed: number;
  totalFailed: number;
  allowViewResult: boolean = false;
  submitCompileError: boolean = false;
  classroomSlug:string;
  @ViewChild('editor') editor: AceEditorComponent;

  constructor(
    private assignmentsService: AssignmentsService,
    private submissionService: SubmissionService,
    private router: Router,
    private route: ActivatedRoute,
    public location: Location,
    private authService:AuthService,
    private buildService:BuildService
  ) {
    this.hideOutput = true;
    this.hideInput = true;
    this.currentLanguage = 'java';
    this.currentTheme = 'monokai';
    this.THEMES = GlobalConstants.THEMES;
    this.LANGUAGES = GlobalConstants.LANGUAGES;
    this.langMap = GlobalConstants.langModes;
    this.sourceCode = 'public class Hello {\n' +
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
    editor.setOption('enableLiveAutocompletion', true);
    editor.setOption('showPrintMargin', false);
    editor.setOption('wrap', true);
    editor.setFontSize(14);
  }

  ngOnInit(): void {
    this.classroomSlug=this.route.snapshot.params.classroomSlug;
    const assignmentSlug = this.route.snapshot.params.assignmentSlug;
    const questionSlug = this.route.snapshot.params.questionSlug;
    this.authService.user$.subscribe((data)=>{
      this.emailId=data.email;
      console.log(this.emailId);
    })
    this.assignmentsService.getUserQuestion(assignmentSlug, questionSlug,this.classroomSlug).subscribe(
      (question) => {
        this.allowedLanguages = [];
        this.currentQuestion = question;
        for (const lang of question.allowedLanguages) {
          this.allowedLanguages.push({
            'name': lang,
            'value': this.LANGUAGES.find(a => a.name === lang).value
          });
        }
        this.currentLanguage = this.allowedLanguages[0].value;
      }
    );
    this.assignmentsService.getActiveAssignmentBySlug(assignmentSlug,this.classroomSlug)
      .subscribe((assignment) => {
        this.assignmentId = assignment.id;
        assignment.questions.forEach((question)=>{
          if(question.slug===questionSlug){
              this.questionId=question.id;
          }
        })
        this.submissionService.getUserResponse(this.assignmentId, this.questionId, this.emailId,this.classroomSlug)
        .subscribe(
          res => {
            //this.question = res;
          this.submitCodeResponse=new SubmitCodeResponse();
          this.submitCodeResponse.score=res.score;
          this.submitCodeResponse.status=res.resultStatus;
        this.buildService.getBuild(res.buildId).subscribe(
            build => {
                this.currentLanguage = build.language;
                  this.sourceCode = build.sourceCode;
                  this.submitCompileError = false;
                  this.showAssessmentResults = true;
                  if(build.status==='COMPILE_ERROR'){
                    this.submitCompileError = true;
                  }else{
                    this.totalPassed = res.testResults.map(this.statusToInt).reduce((a, b) => a + b);
                    console.log("Total Passed"+res.testResults);
                    this.submitCodeResponse.testResults=res.testResults;
                    this.totalFailed = res.testResults.length - this.totalPassed;        
                  }
                  // this.submissionService.submitCode(request,this.classroomSlug)
                  //   .subscribe((response) => {
                  //       this.submitCodeResponse = response;
                  //       console.log(response);
                  //       if (response.status === 'COMPILE_ERROR') {
                  //         this.submitCompileError = true;
                  //       } else {
                  //         this.totalPassed = response.testResults.map(this.statusToInt).reduce((a, b) => a + b);
                  //         this.totalFailed = response.testResults.length - this.totalPassed;
                  //       }
                  //       this.submitProcess = false;
                  //       this.showAssessmentResults = true;
                  //     },
                  //     (error) => {
                  //       console.log(error);
                  //       this.submitProcess = false;
                  //     });

          }
        );
            //console.log(this.question);
          }
        );
      });

   
    



    // this.runRodeResponse = {
    //   input: '2',
    //   output: '4',
    //   executionTime: 14,
    //   expectedOutput: '4',
    //   status: 'ACCEPTED'
    // };
  }

  runCode() {
    const request = new RunCodeRequest();
    request.assignmentId = this.assignmentId;
    request.questionId = this.currentQuestion.id;
    request.language = this.currentLanguage;
    request.input = this.input;
    request.sourceCode = this.sourceCode;
    this.runCodeProcess = true;
    this.submissionService.runCode(request,this.classroomSlug)
      .subscribe((response) => {
          this.runRodeResponse = response;
          this.hideOutput = false;
          this.runCodeProcess = false;
          this.allowViewResult = true;
          console.log(response);
        },
        (error) => {
          console.error(error);
        });
  }

  submitCode() {
    const request = new SubmitCodeRequest();
    request.assignmentId = this.assignmentId;
    request.questionId = this.currentQuestion.id;
    request.sourceCode = this.sourceCode;
    request.language = this.currentLanguage;
    this.submitProcess = true;
    this.submitCompileError = false;
    this.submissionService.submitCode(request,this.classroomSlug)
      .subscribe((response) => {
          this.submitCodeResponse = response;
          this.testResults=response.testResults;
          console.log(response);
          if (response.status === 'COMPILE_ERROR') {
            this.submitCompileError = true;
          } else {
            this.totalPassed = response.testResults.map(this.statusToInt).reduce((a, b) => a + b);
            this.totalFailed = response.testResults.length - this.totalPassed;
          }
          this.submitProcess = false;
          this.showAssessmentResults = true;
        },
        (error) => {
          console.log(error);
          this.submitProcess = false;
        });
  }

  removeUnderScore(str: string) {
    if (str) {
      return str.split('_').join(' ');
    }
    return '';

  }

  statusToInt(test): number {
    return test.status === 'PASSED' ? 1 : 0;
  }

  backButton(){
    this.location.back()
}
}
