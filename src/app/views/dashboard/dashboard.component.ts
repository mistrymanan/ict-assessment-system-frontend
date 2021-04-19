import {Component, OnInit, TemplateRef} from '@angular/core';
import {AssignmentsService} from '../../services/assignments.service';
import {ActiveAssignment} from '../../models/active-assignment';
import {Router} from '@angular/router';
import {GlobalConstants} from '../../global-constants';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { AuthService } from '../../services/auth.service';
import {User} from 'firebase';
import { ClassroomsService } from '../../services/classrooms.service';
import { ClassroomUserResponse } from '../../models/ClassroomUserResponse';
import { DataService } from '../../services/data.service';
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  statusBadge: Map<string, string>;
  modalRef: BsModalRef;
  startAssignmentProcess: boolean = false;
  currentAssignment: ActiveAssignment;
  user: any={};
  userClassroomsDetails: ClassroomUserResponse={instructClassrooms:[],enrolledClassrooms:[]};
  
  constructor(
    private authService: AuthService,
    private assignmentsService: AssignmentsService,
    private modalService: BsModalService,
    private router: Router,
    private  classroomService: ClassroomsService,
    private dataService: DataService
  ) {
    this.statusBadge = GlobalConstants.statusBadge;
  }

  activeAssignments: ActiveAssignment[];

  ngOnInit(): void {
    this.authService.user$.subscribe((user: User) => {
      this.user = user;
    }
    );
    this.getUserClassrooms();

    // this.assignmentsService.getAllActiveAssignments().subscribe(
    //   (assignments) => {
    //     this.activeAssignments = assignments;
    //   }
    // );
  }

  getUserClassrooms(){
    this.classroomService.getUserClassrooms().subscribe(
        (response) =>{
          this.userClassroomsDetails=response;
        //  console.log(this.userClassroomsDetails);
        }
    )
    // this.userClassroomsDetails=this.dataService.classrooms;
  }

  openModal(template: TemplateRef<any>, assignment: ActiveAssignment) {
    this.currentAssignment = assignment;
    this.modalRef = this.modalService.show(template);
  }

  // startAssignment() {
  //   this.startAssignmentProcess = true;
  //   this.assignmentsService.startAssignment(this.currentAssignment.id).subscribe(
  //     () => {
  //       this.startAssignmentProcess = false;
  //       this.modalRef.hide();
  //       this.openAssignment(this.currentAssignment.slug);
  //     },
  //     () => {
  //       this.startAssignmentProcess = false;
  //       console.log('assignment cannot be started');
  //       this.modalRef.hide();
  //     }
  //   );
  // }

  removeUnderScore(str: string) {
    return str.split('_').join(' ');
  }

  // openAssignment(slug: string) {
  //   this.router.navigate([slug]);
  // }

  openClassroom(slug: string){
    this.router.navigate(['/classrooms',slug]);
  }

  addClassroom(slug: string){
    this.router.navigate(['/classrooms','add']);
  }





}