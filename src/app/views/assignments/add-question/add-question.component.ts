import {Component, OnInit, ViewChildren, AfterViewInit, QueryList} from '@angular/core';
import {AceEditorComponent} from 'ng2-ace-editor';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from '../../../services/assignments.service';
import { Assignment } from '../../../models/assignment';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit, AfterViewInit {
  LANGUAGES = [
    {name: 'Java', value: 'java'},
    {name: 'Python 3.8', value: 'python'},
    {name: 'C', value: 'c_cpp'},
    {name: 'C++', value: 'c_cpp'},
  ];
  assignment: Assignment;
  questionForm: FormGroup;
  solutionLanguage: string;
  text: string;
  solutionCode: string;
  @ViewChildren(AceEditorComponent) editors: QueryList<AceEditorComponent>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentsService,
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
    })
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
    )

  }
  goBack(): void {
    this.location.back();
  }
  updateDescription(e){
    this.questionForm.controls['description'].setValue(this.text);
  }
  updateSolutionCode(e){
    this.questionForm.controls['solutionCode'].setValue(this.solutionCode);
  }
  addTestCase(){
    this.testCases.push(
      this.fb.group({
        input: ['']
      })
    );
  }
  submitAddQuestionForm(){
    this.assignmentService.addQuestionToAssignment(this.assignment.id, this.questionForm.value).subscribe(
      (res) => {
        this.router.navigate(['assignments', this.assignment.slug]);
      },
      console.error
    )
  }
  removeTestCase(i: number){
    this.testCases.removeAt(i);
  }

}
