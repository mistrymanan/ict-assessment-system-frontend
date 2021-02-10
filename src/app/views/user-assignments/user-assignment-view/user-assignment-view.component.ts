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
classroomSlug:string;
  constructor(
    private assignmentService: AssignmentsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.classroomSlug=this.route.snapshot.params.classroomSlug;
    const slug = this.route.snapshot.params.slug;
    this.statusBadge = GlobalConstants.statusBadge;
    this.assignmentService.getActiveAssignmentBySlug(slug,this.classroomSlug).subscribe(
      (assignment) => {
        this.assignment = assignment;
      }
    );
  }

  get statusIconMap() {
    const map = new Map<string, string>();
    map['IN_PROGRESS'] = 'hourglass-2';
    map['COMPLETED'] = 'check-circle';
    map['LATE_SUBMITTED'] = 'clock-o';
    return map;
  }

  removeUnderScore(str: string) {
    return str.split('_').join(' ');
  }

}
