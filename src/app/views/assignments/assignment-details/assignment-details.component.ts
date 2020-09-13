import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentsService } from '../../../services/assignments.service';
import { Assignment } from '../../../models/assignment';

@Component({
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {
  assignment: Assignment;
  constructor(
    private route: ActivatedRoute,
    private assignmentService: AssignmentsService,  
  ) { 
    this.assignment = new Assignment();
  }

  async ngOnInit() {
    const slug  = this.route.snapshot.params.slug;
    this.assignment = await this.assignmentService.getAssignmentBySlug(slug).toPromise()
  }
}
