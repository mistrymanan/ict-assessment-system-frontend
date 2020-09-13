import { Component, OnInit } from '@angular/core';
import {AssignmentsService} from '../../../services/assignments.service';
import {Assignment} from '../../../models/assignment';
import {Observable} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-assignments',
  templateUrl: './view-assignments.component.html',
  styleUrls: ['./view-assignments.component.css']
})
export class ViewAssignmentsComponent implements OnInit {
  assignments: Assignment[] = []
  constructor(private assignmentsService: AssignmentsService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.assignmentsService.getAllAssignments()
    .subscribe(assignments => {
      this.assignments = assignments;
    },
    console.error
    );
    // this.assignmentsService.loadAllAssignments();
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

}
