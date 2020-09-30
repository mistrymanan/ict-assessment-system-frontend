import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignmentsService} from '../../../services/assignments.service';
import {SubmissionService} from '../../../services/submission.service';
import {SubmissionDetailsResponse} from '../../../models/submissionDetails-response';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view-submissions',
  templateUrl: './view-submissions.component.html',
  styleUrls: ['./view-submissions.component.css']
})
export class ViewSubmissionsComponent implements OnInit {
  submissions: SubmissionDetailsResponse[] = [];
  totalPoints: number;
  assignmentId;
  questionId;
  constructor(
    private route: ActivatedRoute,
    private submissionService: SubmissionService,
    private assignmentsService: AssignmentsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.assignmentId = this.route.snapshot.paramMap.get('assignmentId');
    this.questionId = this.route.snapshot.paramMap.get('questionId');
    this.assignmentsService.getAssignmentById(this.assignmentId).subscribe(
      assignment => {
        this.totalPoints = assignment.questions.find(question => question.id === this.questionId).totalPoints;
      }
    );
    this.submissionService
      .submissionDetails(this.assignmentId, this.questionId)
      .subscribe(submissions => {
        this.submissions = submissions;
      } );
  }
}
