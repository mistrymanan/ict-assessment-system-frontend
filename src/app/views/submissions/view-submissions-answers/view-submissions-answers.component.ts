import { Component, OnInit } from '@angular/core';
import {SubmissionDetailsResponse} from '../../../models/submissionDetails-response';
import {Assignment} from '../../../models/assignment';
import {ActivatedRoute, Router} from '@angular/router';
import {SubmissionService} from '../../../services/submission.service';
import {AssignmentsService} from '../../../services/assignments.service';

@Component({
  selector: 'app-view-submissions-answers',
  templateUrl: './view-submissions-answers.component.html',
  styleUrls: ['./view-submissions-answers.component.css']
})
export class ViewSubmissionsAnswersComponent implements OnInit {
  submissions: SubmissionDetailsResponse;
  assignment: Assignment;
  assignmentId: string;
  assignmentName: string;
  email: string;
  assignmentSlug;
  constructor(
    private route: ActivatedRoute,
    private submissionService: SubmissionService,
    private assignmentsService: AssignmentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.assignmentSlug = this.route.snapshot.paramMap.get('assignmentSlug');
    this.email = this.route.snapshot.queryParamMap.get('email');
    // this.questionSlug = this.route.snapshot.paramMap.get('questionSlug');
    this.assignmentsService.getAssignmentBySlug(this.assignmentSlug).subscribe(
      assignment => {
        this.assignmentName = assignment.title;
        this.assignmentId = assignment.id;
        // const question = assignment.questions.find(res => res.slug === this.questionSlug);
        // this.questionId = question.id;
        // this.totalPoints = question.totalPoints;
        this.submissionService
          .submissionUserDetails(this.assignmentId, this.email)
          .subscribe(submissions => {
            console.log(submissions);
            this.submissions = submissions;
          } );
      }
    );
  }
  openBuild(assignmentId: string, email: string, buildId: string) {
    this.router.navigate(['/submissions', this.assignmentSlug, 'answers', buildId], {relativeTo: this.route, queryParams : {'email': email , 'assignmentId': assignmentId}});
  }
}
