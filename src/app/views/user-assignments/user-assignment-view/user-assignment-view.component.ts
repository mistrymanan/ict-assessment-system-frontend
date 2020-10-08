import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActiveAssignmentDetails} from '../../../models/active-assignment-details';
import {AssignmentsService} from '../../../services/assignments.service';
import {GlobalConstants} from '../../../global-constants';

@Component({
  selector: 'app-user-assignment-view',
  templateUrl: './user-assignment-view.component.html',
  styleUrls: ['./user-assignment-view.component.css']
})
export class UserAssignmentViewComponent implements OnInit {
  assignment: ActiveAssignmentDetails = new ActiveAssignmentDetails();
  statusBadge: Map<string, string>;

  constructor(
    private assignmentService: AssignmentsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.params.slug;

    this.statusBadge = GlobalConstants.statusBadge;
    this.assignmentService.getActiveAssignmentBySlug(slug).subscribe(
      (assignment) => {
        this.assignment = assignment;
      }
    );
  }

  removeUnderScore(str: string) {
    return str.split('_').join(' ');
  }

}
