import {Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef} from '@angular/core';
import {AceEditorComponent} from 'ng2-ace-editor';
// import * as ace from 'ace-builds';
// import 'ace-builds/webpack-resolver';
@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.css']
})
export class CreateAssignmentComponent implements OnInit {


  // @ViewChild('markdownEditor') markdownEditor: AceEditorComponent;
  // @ViewChild('solutionEditor') solutionEditor: AceEditorComponent;
  constructor() {
  }

  ngOnInit(): void {
  }
}
