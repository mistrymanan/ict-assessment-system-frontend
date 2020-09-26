import {Component, OnInit, ViewChildren, AfterViewInit, QueryList} from '@angular/core';
import {AceEditorComponent} from 'ng2-ace-editor';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from '../../../services/assignments.service';
import { Assignment } from '../../../models/assignment';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { GlobalConstants } from '../../../global-constants';
import { ExecutionService } from '../../../services/execution.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit, AfterViewInit {
  LANGUAGES = GlobalConstants.LANGUAGES;
  langModes = GlobalConstants.langModes;
  assignment: Assignment;
  questionForm: FormGroup;
  solutionLanguage: string;
  text: string;
  solutionCode: string;
  processing: boolean = false;
  showTestOutputs: boolean = false;
  showCompileError: boolean = false;
  compileErrorMessage: string;
  testOutputs;
  @ViewChildren(AceEditorComponent) editors: QueryList<AceEditorComponent>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentsService,
    private executionService: ExecutionService,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.questionForm = fb.group({
      'title': [''],
      'allowedLanguages': [''],
      'totalPoints': [''],
      'showExpectedOutput': [false],
      'description': [''],
      'solutionLanguage': ['java'],
      'solutionCode': [''],
      'testCases': fb.array([
      ])
    });
    this.assignment = new Assignment();
    this.solutionLanguage = 'java';
//     this.text = `## Fibonacci Series
// ---
// Write a Program to Print Fibonacci Series upto Nth Fibonacci Number.

// \` 1 1 2 3 5 8 13 ...\`

// __Sample Input__

//     6
// __Sample Output__

//     1 1 2 3 5 8

// `;
  }
  get testCases(): FormArray {
    return this.questionForm.get('testCases') as FormArray;
  }
  ngAfterViewInit(): void {
    this.editors.forEach(editorRef => {
      const editor = editorRef.getEditor();
      editor.setOption('showPrintMargin', false);
      editor.setOption('wrap', true);
      editor.setFontSize(14);
    });
  }

  ngOnInit(): void {
    const assignmemtSLug = this.route.snapshot.params.slug;
    this.assignmentService.getAssignmentBySlug(assignmemtSLug).subscribe(
      assignment => {
        this.assignment = assignment;
      },
      error => {
        this.router.navigate(['404']);
      }
    );

  }
  generateOutputsForTests() {
    const sourceCode = this.questionForm.value.solutionCode;
    const language = this.questionForm.value.solutionLanguage;
    const inputs = this.questionForm.get('testCases').value;
    inputs.forEach(input => {delete input.output; });
    this.processing = true;
    this.executionService.runProgramMultipleInputs(sourceCode, language, inputs).subscribe(
      result => {
        if (result.status === 'COMPILE_ERROR') {
          this.showCompileError = true;
          this.compileErrorMessage = result.message;
          this.processing = false;
        } else {
          this.testOutputs = new Map<string, any>();
          for (const output of result.test_outputs) {
            this.testOutputs[output.id] = output;
          }
          this.processing = false;
          this.showTestOutputs = true;
        }
      }
    );
  }
  goBack(): void {
    this.location.back();
  }
  updateDescription(e) {
    this.questionForm.controls['description'].setValue(this.text);
  }
  updateSolutionCode(e) {
    this.questionForm.controls['solutionCode'].setValue(this.solutionCode);
  }
  addTestCase() {
    this.testCases.push(
      this.fb.group({
        id: [''],
        input: [''],
        output: ['']
      })
    );
    this.showTestOutputs = false;
  }
  submitAddQuestionForm() {
    this.assignmentService.addQuestionToAssignment(this.assignment.id, this.questionForm.value).subscribe(
      (res) => {
        this.router.navigate(['assignments', this.assignment.slug]);
      },
      console.error
    );
  }
  removeTestCase(i: number) {
    this.testCases.removeAt(i);
  }

}
