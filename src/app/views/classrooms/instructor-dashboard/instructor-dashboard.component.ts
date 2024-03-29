import { Component, OnInit, ViewChild } from '@angular/core';
import {AssignmentsService} from '../../../services/assignments.service';
import {ActiveAssignment} from '../../../models/active-assignment';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {GlobalConstants} from '../../../global-constants';
import {BsModalRef, BsModalService, ModalDirective} from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassroomsService } from '../../../services/classrooms.service';


import { Assignment } from '../../../models/assignment';
import { AuthService } from '../../../services/auth.service';
import { User } from 'firebase';
import { ClassroomDetails } from '../../../models/classroom-details';

import { Classroom } from '../../../models/Classroom';
import { filter } from 'rxjs/operators';
import { ClassroomUserDetails } from '../../../models/classroom-user-details';
import { error } from 'protractor';
@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.scss']
})
export class InstructorDashboardComponent implements OnInit {
  addInstructorForm: FormGroup;
  userEnrollForm: FormGroup;
  viewMode='classwork';
  modalRef: BsModalRef;
  startAssignmentProcess: boolean = false;
  isInstructor : boolean = false;
  currentAssignment: ActiveAssignment;
  statusBadge: any;
  userEmail : string;
  activeAssignments: ActiveAssignment[];
  classroom:Classroom={title:'',slug:'',enrolledUsers:[],instructors:[],ownerEmail:'',ownerName:''};
  
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('myModal1') public myModal1: ModalDirective;
  assignments: Assignment[];
  errorOnStartModal:string;
  
  
  classroomSlug: string;
  
 
  
  constructor(
    private fb: FormBuilder,
    private assignmentsService: AssignmentsService,
    private modalService: BsModalService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private classroomservice: ClassroomsService,
    private classroomsService: ClassroomsService,
  ) { this.statusBadge = GlobalConstants.statusBadge;
    this.assignments=new Array();
   this.router.events
   .pipe(
    filter(event => event instanceof NavigationEnd)
  )
   .subscribe(
     event=>{
      this.updateData();
     }
   )
  // this.route.data.subscribe(data=>{
  //   console.log(data);
  // })

  }

 
  ngOnInit(): void {
    
  }


  updateData(){
      this.classroomSlug = this.route.snapshot.params.classroomSlug;
      this.addInstructorForm = this.fb.group({
        name: ['', Validators.required ],
        email:['',Validators.pattern("^([a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4},?)+$")],
      });
      this.userEnrollForm = this.fb.group({
        name: ['', Validators.required ],
        email:['',Validators.pattern("^([a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4},?)+$")],
      });
  
  
      this.assignmentsService.getAllActiveAssignments(this.classroomSlug).subscribe(
        (assignments) => {
          this.activeAssignments = assignments;
        }
      );
      this.assignmentsService.getAllAssignments(this.classroomSlug)
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
  createAssignment():void{
    this.router.navigate(['classrooms',this.classroomSlug,'assignments','create-assignment'])
  }
  openModal(template: TemplateRef<any>, assignment: ActiveAssignment) {
    this.currentAssignment = assignment;
    this.modalRef = this.modalService.show(template);
  }

  startAssignment() {
    this.startAssignmentProcess = true;
    this.assignmentsService.startAssignment(this.currentAssignment.id,this.classroomSlug).subscribe(
      () => {
        this.startAssignmentProcess = false;
        this.modalRef.hide();
        this.openAssignment(this.currentAssignment.slug);
      },
      () => {
        this.startAssignmentProcess = false;
        console.log('assignment cannot be started');
        //this.modalRef.hide();
      }
    );
  }

  removeUnderScore(str: string) {
    return str.split('_').join(' ');
  }

  openAssignment(slug: string) {
    this.router.navigate(["classrooms",this.classroomSlug,"user-submissions",slug]);
  }

  viewAssignment(slug: string){
    console.log('clicked')
    this.router.navigate([slug],{relativeTo: this.route});
  }
  deleteAssignment(id: string) {
    this.assignmentsService.deleteAssignment(id,this.classroomSlug).subscribe(
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
        this.classroom=res
        console.log("checking access details")
         if(res.ownerEmail===this.userEmail||this.checkUserInInstructors(this.userEmail,res.instructors)){
           console.log("giving the access")
           this.isInstructor=true
         }
      }
    )
  }
  checkUserInInstructors(username:String,instructors:ClassroomUserDetails[]):boolean{
    console.log("i am being called.")
    let ans =false
    instructors.forEach(inst=>{
      if(inst.emailId===username){
        console.log("found the user's email in instructors");
        ans=true
      }
    })
    return ans;
  }
  onAddInstructor():void{
    const invitesend = this.addInstructorForm.get('email').value;
    console.log(invitesend);
    console.log(invitesend.split(','));
    const instructorEmails=invitesend.split(',');
    this.classroomsService.addInstructor(this.classroomSlug,instructorEmails).subscribe(res=>{ 
      this.myModal.hide();
      this.getClassroomDetails();
    },err=>{
      console.log(err);
    });
  }
  onEnrollUser():void{
    const enrollUsers= this.userEnrollForm.get('email').value;
    const userEmails=enrollUsers.split(',');
    console.log(enrollUsers.split(','));
    this.classroomsService.enrollUser(this.classroomSlug,userEmails).subscribe(
      res=>{
        this.myModal1.hide();
        this.getClassroomDetails();
      },err=>{
        console.log(err);
      }
    )
  }
  unEnrollUser(username:String){
    console.log(username);
    this.classroomsService.unrollUser(this.classroomSlug,username).subscribe(
      res=>{
        this.getClassroomDetails();
      }
    );
    
  }

}