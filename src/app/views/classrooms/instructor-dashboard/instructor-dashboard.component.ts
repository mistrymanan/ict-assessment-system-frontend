import { Component, OnInit, ViewChild } from '@angular/core';
import {AssignmentsService} from '../../../services/assignments.service';
import {ActiveAssignment} from '../../../models/active-assignment';
import {ActivatedRoute, Router} from '@angular/router';
import {GlobalConstants} from '../../../global-constants';
import {BsModalRef, BsModalService, ModalDirective} from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassroomsService } from '../../../services/classrooms.service';


import { Assignment } from '../../../models/assignment';
@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.css']
})
export class InstructorDashboardComponent implements OnInit {
  addInstructorForm: FormGroup;
  userEnrollForm: FormGroup;
  viewMode='classwork';
  modalRef: BsModalRef;
  startAssignmentProcess: boolean = false;
  currentAssignment: ActiveAssignment;
  statusBadge: any;
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('myModal1') public myModal1: ModalDirective;
  assignments: Assignment[] = [];
  classroomSlug: String;
  constructor(
    private fb: FormBuilder,
    private assignmentsService: AssignmentsService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private classroomsService: ClassroomsService,
  ) { this.statusBadge = GlobalConstants.statusBadge; }
  activeAssignments: ActiveAssignment[];
 
  ngOnInit(): void {
    this.classroomSlug = this.route.snapshot.params.classroomSlug;
    this.addInstructorForm = this.fb.group({
      name: ['', Validators.required ],
      email:['',Validators.pattern("^([a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4},?)+$")],
    });

    this.assignmentsService.getAllActiveAssignments().subscribe(
      (assignments) => {
        this.activeAssignments = assignments;
      }
    );
    this.assignmentsService.getAllAssignments()
    .subscribe(assignments => {
      this.assignments = assignments;
    },
    console.error
    );
  }

  openModal(template: TemplateRef<any>, assignment: ActiveAssignment) {
    this.currentAssignment = assignment;
    this.modalRef = this.modalService.show(template);
  }

  startAssignment() {
    this.startAssignmentProcess = true;
    this.assignmentsService.startAssignment(this.currentAssignment.id).subscribe(
      () => {
        this.startAssignmentProcess = false;
        this.modalRef.hide();
        this.openAssignment(this.currentAssignment.slug);
      },
      () => {
        this.startAssignmentProcess = false;
        console.log('assignment cannot be started');
        this.modalRef.hide();
      }
    );
  }

  removeUnderScore(str: string) {
    return str.split('_').join(' ');
  }

  openAssignment(slug: string) {
    this.router.navigate([slug]);
  }

  viewAssignment(slug: string){
    console.log('clicked')
    this.router.navigate([slug],{relativeTo: this.route});
  }
  deleteAssignment(id: string) {
    this.assignmentsService.deleteAssignment(id).subscribe(
      res => {
        this.assignments.forEach((a,i) => {
          if(a.id === id){
            this.assignments.splice(i,1);
          }
        });
      },
      console.error
    );
  }
  onAddInstructor():void{
    const invitesend = this.addInstructorForm.get('email').value;
    console.log(invitesend);
    console.log(invitesend.split(','));
    const instructorEmails=invitesend.split(',');
    this.classroomsService.addInstructor(this.classroomSlug,instructorEmails).subscribe(res=>{ 
      this.myModal.hide();
    },err=>{
      console.log(err);
    });
  }
  onEnrollUser():void{
    const enrollUsers= this.userEnrollForm.get('email').value;
    console.log(enrollUsers.split(','));
  }
 

}
