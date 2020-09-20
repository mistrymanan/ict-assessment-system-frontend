import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveAssignment } from '../../../models/active-assignment';
import { ActiveAssignmentDetails } from '../../../models/active-assignment-details';
import { AssignmentsService } from '../../../services/assignments.service';

@Component({
  selector: 'app-user-assignment-view',
  templateUrl: './user-assignment-view.component.html',
  styleUrls: ['./user-assignment-view.component.css']
})
export class UserAssignmentViewComponent implements OnInit {
  assignment: ActiveAssignmentDetails = new ActiveAssignmentDetails();
  totalPoints: number = 0;
  totalCurrentScore: number = 0;
  constructor(
    private assignmentService: AssignmentsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {  
    const slug = this.route.snapshot.params.slug;
    this.assignmentService.getActiveAssignmentBySlug(slug).subscribe(
      (assignment) => {
        this.assignment = assignment;
        this.totalPoints = assignment.questions.map(question => question.totalPoints).reduce((a,b) => a + b);
        this.totalCurrentScore = assignment.questions.map(question => question.currentScore).reduce((a,b) => a + b);
      }
    )
  }

}
