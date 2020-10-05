import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AceEditorComponent} from 'ng2-ace-editor';
import * as ace from 'ace-builds';
import {edit} from 'ace-builds';
import {ActivatedRoute, Router} from '@angular/router';
import {SubmissionService} from '../../../services/submission.service';
import {AssignmentsService} from '../../../services/assignments.service';
import {BuildService} from '../../../services/build.service';
import {SubmissionDetailsResponse} from '../../../models/submissionDetails-response';
import {Assignment} from '../../../models/assignment';
import {Build} from '../../../models/build';
import {SubmissionQuestionDetailsResponse} from '../../../models/submissionQuestionDetails-response';
@Component({
  selector: 'app-view-answer',
  templateUrl: './view-answer.component.html',
  styleUrls: ['./view-answer.component.css']
})
export class ViewAnswerComponent implements OnInit {
  submission: SubmissionDetailsResponse;
  solutionLanguage: string;
  text: string;
  buildId: string;
  build: Build;
  assignment: Assignment;
  assignmentId: string;
  assignmentName: string;
  questionId: string;
  question: SubmissionQuestionDetailsResponse;
  email: string;
  assignmentSlug;
  @ViewChildren(AceEditorComponent) editors: QueryList<AceEditorComponent>;
  constructor(
    private route: ActivatedRoute,
    private submissionService: SubmissionService,
    private assignmentsService: AssignmentsService,
    private buildService: BuildService,
    private router: Router
  ) {
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
     this.assignmentId = this.route.snapshot.queryParamMap.get('assignmentId');
     this.email = this.route.snapshot.queryParamMap.get('email');
     this.buildId = this.route.snapshot.queryParamMap.get('buildId');
     this.questionId = this.route.snapshot.queryParamMap.get('questionId');
    this.submissionService
      .submissionUserDetails(this.assignmentId, this.email)
      .subscribe(submissions => {
        this.submission = submissions;
          this.question = this.submission.questionEntities.find(
            q => q.questionId === this.questionId
          );
      });
    this.buildService
      .getBuild(this.buildId)
      .subscribe(
        build => {
          // console.log(build);
          this.build = build;
          this.solutionLanguage = this.build.language;
          console.log(this.build);
        }
      );


    // ace.require('ace/ext-language_tools');
    // this.editors.forEach(editorRef => {
    //   const editor = editorRef.getEditor();
    //   editor.setOption('enableLiveAutoCompletion', true);
    //   editor.setOption('showPrintMargin', false);
    //   editor.setOption('wrap', true);
    //   editor.setFontSize(14);
    // });

  }

}
