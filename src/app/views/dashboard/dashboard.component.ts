import {Component, OnInit} from '@angular/core';
import {AssignmentsService} from '../../services/assignments.service';
import {ActiveAssignment} from '../../models/active-assignment';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private assignmentsService: AssignmentsService,
    private router: Router,
  ) {
  }

  activeAssignments: ActiveAssignment[];

  ngOnInit(): void {
    this.assignmentsService.getAllActiveAssignments().subscribe(
      (assignments) => {
        this.activeAssignments = assignments;
      }
    );
  }

  openAssignment(slug: string) {
    this.router.navigate([slug]);
  }


}
