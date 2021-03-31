import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { User } from 'firebase';
import { filter } from 'rxjs/operators';
import { GlobalConstants } from '../../../../global-constants';
import { Assignment } from '../../../../models/assignment';
import { Classroom } from '../../../../models/Classroom';
import { ClassroomUserDetails } from '../../../../models/classroom-user-details';
import { AssignmentsService } from '../../../../services/assignments.service';
import { AuthService } from '../../../../services/auth.service';
import { ClassroomsService } from '../../../../services/classrooms.service';

@Component({
  selector: 'app-admin-classroom-detail',
  templateUrl: './admin-classroom-detail.component.html',
  styleUrls: ['./admin-classroom-detail.component.css']
})
export class AdminClassroomDetailComponent implements OnInit {
  addInstructorForm: FormGroup;
  userEnrollForm: FormGroup;
  viewMode='classwork';
  startAssignmentProcess: boolean = false;
  isInstructor : boolean = false;
  statusBadge: any;
  userEmail : string;
  classroom:Classroom={title:'',slug:'',enrolledUsers:[],instructors:[],ownerEmail:'',ownerName:''};
  assignments: Assignment[];
  errorOnStartModal:string;
  classroomSlug: string;
  
 
  
  constructor(
    private assignmentsService: AssignmentsService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
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
  viewAssignment(slug: string){
    console.log('clicked')
    this.router.navigate([slug],{relativeTo: this.route});
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
  onEnrollUser():void{
    const enrollUsers= this.userEnrollForm.get('email').value;
    const userEmails=enrollUsers.split(',');
    console.log(enrollUsers.split(','));
    this.classroomsService.enrollUser(this.classroomSlug,userEmails).subscribe(
      res=>{
        this.getClassroomDetails();
      },err=>{
        console.log(err);
      }
    )
  }
 
  

}