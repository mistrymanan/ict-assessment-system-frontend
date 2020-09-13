import {Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef} from '@angular/core';
import {AceEditorComponent} from 'ng2-ace-editor';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Assignment} from '../../../models/assignment';
import {AssignmentsService} from '../../../services/assignments.service';
import {Router} from '@angular/router';
// import * as ace from 'ace-builds';
// import 'ace-builds/webpack-resolver';
@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.css']
})
export class CreateAssignmentComponent implements OnInit {
  assignmentForm: FormGroup;

  // @ViewChild('markdownEditor') markdownEditor: AceEditorComponent;
  // @ViewChild('solutionEditor') solutionEditor: AceEditorComponent;
  constructor(private fb: FormBuilder,
              private assignmentsService: AssignmentsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.assignmentForm = this.fb.group({
      title: [''],
      timed: [false],
      duration: [{value: '', disabled: true}],
      hasStartTime: [false],
      startTime: [{value: '', disabled: true}],
      hasDeadline: [false],
      deadline: [{value: '', disabled: true}]
    });
    this.assignmentForm.controls['timed'].valueChanges.subscribe(v => {
      if (v) {
        this.assignmentForm.controls['duration'].enable();
      } else {
        this.assignmentForm.controls['duration'].disable();
      }
    });
    this.assignmentForm.controls['hasStartTime'].valueChanges.subscribe(v => {
      if (v) {
        this.assignmentForm.controls['startTime'].enable();
      } else {
        this.assignmentForm.controls['startTime'].disable();
      }
    });
    this.assignmentForm.controls['hasDeadline'].valueChanges.subscribe(v => {
      if (v) {
        this.assignmentForm.controls['deadline'].enable();
      } else {
        this.assignmentForm.controls['deadline'].disable();
      }
    });
  }

  submit(): void {
    const newAssignment: Assignment = this.assignmentForm.value;
    this.assignmentsService.createAssignment(newAssignment).subscribe(
      res => {
        console.log('Assignment created');
        this.router.navigate(['assignments', res.slug]);
    },
    console.error
    );
  }
}
