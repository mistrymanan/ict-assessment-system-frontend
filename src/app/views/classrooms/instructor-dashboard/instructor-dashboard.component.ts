import { Component, OnInit, ViewChild } from '@angular/core';
import {AssignmentsService} from '../../../services/assignments.service';
import {ActiveAssignment} from '../../../models/active-assignment';
import {ActivatedRoute, Router} from '@angular/router';
import {GlobalConstants} from '../../../global-constants';
import {BsModalRef, BsModalService, ModalDirective} from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';  
import { Assignment } from '../../../models/assignment';
import { ClassroomsService } from '../../../services/classrooms.service';
import { AuthService } from '../../../services/auth.service';
import { User } from 'firebase';
@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.css']
})
export class InstructorDashboardComponent implements OnInit {
  viewMode='classwork';
  modalRef: BsModalRef;
  startAssignmentProcess: boolean = false;
  isInstructor : boolean = false;
  currentAssignment: ActiveAssignment;
  statusBadge: any;
  userEmail : string;
  activeAssignments: ActiveAssignment[];

  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('myModal1') public myModal1: ModalDirective;
  assignments: Assignment[] = [];
  
  
  
  constructor(
    private assignmentsService: AssignmentsService,
    private modalService: BsModalService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private classroomservice: ClassroomsService,
  ) { this.statusBadge = GlobalConstants.statusBadge; }

 
  ngOnInit(): void {
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
    this.authService.user$.subscribe((user: User) => {
      this.userEmail = user.email;
    }
    );
    
    this.getClassroomDetails();
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
  getClassroomDetails(){
    const slug = this.route.snapshot.params.classroomSlug
    this.classroomservice.getClassroomDetails(slug).subscribe(
      res=>{
        if(res.ownerEmail===this.userEmail||res.instructors.includes(this.userEmail)){
          this.isInstructor=true
        }
        console.log(res)
      }
    )
  }
}
