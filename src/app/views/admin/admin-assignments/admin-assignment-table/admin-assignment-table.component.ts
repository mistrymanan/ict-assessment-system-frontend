import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AdminAssignment } from '../../../../models/admin-assignment';
import { Assignment } from '../../../../models/assignment';
import { AssignmentsService } from '../../../../services/assignments.service';

@Component({
  selector: 'app-admin-assignment-table',
  templateUrl: './admin-assignment-table.component.html',
  styleUrls: ['./admin-assignment-table.component.css']
})
export class AdminAssignmentTableComponent implements OnInit {
  adminassignment: Assignment;
  classroomSlug: string
  getadminassignment: any;

  constructor(
    private route: ActivatedRoute,
    private adminassignmentService:AssignmentsService) {
      this.adminassignment = new Assignment();
    
   }

  ngOnInit(): void {
    this.classroomSlug=this.route.snapshot.params.classroomSlug;
    const slug = this.route.snapshot.params.assignmentSlug;
    console.log(slug);
    this.adminassignmentService.getAssignmentBySlug(slug,this.classroomSlug).subscribe(
      (assignment) => {
        this.adminassignment = assignment;
      }
    );
   // this.getadminassignment();
  }

  // getadminAssignment(){
  //   this.adminassignmentService.getadminAssignment().subscribe(
  //     (response)=>{
  //       this.adminassignment=response
  //     console.log(this.adminassignment)
  //     }
  //   )
  // }

}
