import {Component, OnInit, TemplateRef} from '@angular/core';
import {AssignmentsService} from '../../services/assignments.service';
import {ActiveAssignment} from '../../models/active-assignment';
import {Router} from '@angular/router';
import {GlobalConstants} from '../../global-constants';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { AuthService } from '../../services/auth.service';
import { User } from 'firebase';
import { UserService } from '../../services/user.service';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {ViewChild} from '@angular/core';
import { ClassroomsService } from '../../services/classrooms.service';
import { ClassroomUserResponse } from '../../models/ClassroomUserResponse';
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('myModal') public myModal: ModalDirective;
  statusBadge: Map<string, string>;
  modalRef: BsModalRef;
  startAssignmentProcess: boolean = false;
  currentAssignment: ActiveAssignment;
  user:any={};
  userEmail:String;
  userClassroomsDetails: ClassroomUserResponse;
  //getUserClassrooms: any;
 
  constructor(
    private authService: AuthService,
    private assignmentsService: AssignmentsService,
    private modalService: BsModalService,
    private router: Router,
    private userService: UserService,
    private  classroomService: ClassroomsService,
  ) {
    this.statusBadge = GlobalConstants.statusBadge;
    authService.user$.subscribe((user: User) => {
      this.user = user;
      this.userEmail=this.user.email;
      this.userClassroom();
      // console.log("I am User From Dashboard"+this.user.email);
    });
    //console.log(this.user.email);
    //console.log(userService.getRequest().subscribe());
  }

  activeAssignments: ActiveAssignment[];

  ngOnInit(): void {
    this.authService.user$.subscribe((user: User) => {
      this.user = user;
      
    }
    );
    

    this.assignmentsService.getAllActiveAssignments().subscribe(
      (assignments) => {
        this.activeAssignments = assignments;
      }
    );
    
    // console.log("hello World"+this.userEmail);
    // console.log(this.userService.getRequest(this.userEmail).subscribe());
  }
  userClassroom(){
    this.classroomService.getUserClassrooms().subscribe(
      (response)=>{
        console.log(response)
      }
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


}
