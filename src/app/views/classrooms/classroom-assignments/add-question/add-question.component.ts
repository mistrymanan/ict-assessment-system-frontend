import {Component, OnInit, ViewChildren, AfterViewInit, QueryList} from '@angular/core';
import {AceEditorComponent} from 'ng2-ace-editor';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignmentsService} from '../../../../services/assignments.service';
import {Assignment} from '../../../../models/assignment';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {GlobalConstants} from '../../../../global-constants';
import {ExecutionService} from '../../../../services/execution.service';
import {DataService} from '../../../../services/data.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit, AfterViewInit {
  isUpdateMode: boolean = false;
  LANGUAGES = GlobalConstants.LANGUAGES;
  langModes = GlobalConstants.langModes;
  assignment: Assignment;
  questionID: string;
  questionForm: FormGroup;
  solutionLanguage: string;
  text: string;
  solutionCode: string;
  processing: boolean = false;
  showTestOutputs: boolean = false;
  showCompileError: boolean = false;
  editModeShowOutput: boolean = false;
  compileErrorMessage: string;
  classroomSlug: string;
  testOutputs;
  @ViewChildren(AceEditorComponent) editors: QueryList<AceEditorComponent>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentsService,
    private executionService: ExecutionService,
    private location: Location,
    private fb: FormBuilder,
    private dataService: DataService
  ) {
    this.questionForm = fb.group({
      'title': [''],
      'allowedLanguages': [''],
      'totalPoints': [''],
      'showExpectedOutput': [false],
      'description': [''],
      'solutionLanguage': ['java'],
      'solutionCode': [''],
      'testCases': fb.array([])
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
    this.classroomSlug = this.route.snapshot.params.classroomSlug;
    const assignmentSlug = this.route.snapshot.params.assignmentSlug;
    const questionSlug = this.route.snapshot.params.questionSlug;

    this.assignmentService.getAssignmentBySlug(assignmentSlug,this.classroomSlug).subscribe(
      assignment => {
        this.assignment = assignment;
      },
      error => {
        this.router.navigate(['404']);
      }
    );
    if (assignmentSlug && questionSlug && this.classroomSlug) {
      this.isUpdateMode = true;
      this.assignmentService.getQuestion(assignmentSlug, questionSlug,this.classroomSlug).subscribe(
        (question) => {
          this.questionForm.patchValue(question);
          if (question.testCases) {
            // question.testCases.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));
            question.testCases.forEach((testCase) => {
              this.testCases.push(
                this.fb.group({
                  id: [''],
                  input: [testCase.input],
                  output: [testCase.output]
                })
              );
            });
            this.editModeShowOutput = true;
          }
          this.text = question.description;
          this.solutionCode = question.solutionCode;
          this.questionID = question.id;
        }
      );
    }
  }

  generateOutputsForTests() {
    this.editModeShowOutput = false;
    const sourceCode = this.questionForm.value.solutionCode;
    const language = this.questionForm.value.solutionLanguage;
    const inputs = this.questionForm.get('testCases').value;
    inputs.forEach(input => {
      delete input.output;
    });
    this.showCompileError = false;
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
    this.editModeShowOutput = false;
  }

  submitAddQuestionForm() {

    if (this.isUpdateMode) {
      this.assignmentService.updateQuestion(this.assignment.id, this.questionID, this.questionForm.value,this.classroomSlug).subscribe(
        (res: any) => {
          this.router.navigate(['assignments', this.assignment.slug]);
        }
        ,
        console.error
      );
    } else {
      this.assignmentService.addQuestionToAssignment(this.assignment.id, this.questionForm.value,this.classroomSlug).subscribe(
        (res) => {
          this.router.navigate(['assignments', this.assignment.slug]);
        },
        console.error
      );
    }
  }

  removeTestCase(i: number) {
    this.testCases.removeAt(i);
  }

}
