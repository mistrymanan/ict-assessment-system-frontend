import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignmentsService} from '../../../services/assignments.service';
import {SubmissionService} from '../../../services/submission.service';
import {SubmissionDetailsResponse} from '../../../models/submissionDetails-response';
import {Observable} from 'rxjs';
import {Assignment} from '../../../models/assignment';

@Component({
  selector: 'app-view-submissions',
  templateUrl: './view-submissions.component.html',
  styleUrls: ['./view-submissions.component.css']
})
export class ViewSubmissionsComponent implements OnInit {
  submissions: SubmissionDetailsResponse[] = [];
  totalPoints: number;
  assignment: Assignment;
  assignmentId: string;
  assignmentName: string;
  assignmentSlug;
  constructor(
    private route: ActivatedRoute,
    private submissionService: SubmissionService,
    private assignmentsService: AssignmentsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.assignmentSlug = this.route.snapshot.paramMap.get('assignmentSlug');
    // this.questionSlug = this.route.snapshot.paramMap.get('questionSlug');


    this.assignmentsService.getAssignmentBySlug(this.assignmentSlug).subscribe(
      assignment => {
        this.assignmentName = assignment.title;
        this.assignmentId = assignment.id;
        // const question = assignment.questions.find(res => res.slug === this.questionSlug);
        // this.questionId = question.id;
        // this.totalPoints = question.totalPoints;
        this.submissionService
          .submissionDetails(this.assignmentId)
          .subscribe(submissions => {
            console.log(submissions);
            this.submissions = submissions;
          } );
      }
    );



    // this.assignmentsService.getQuestion(this.assignmentSlug, this.questionSlug).subscribe(
    //   question => {
    //     this.questionId = question.id;
    //     this.totalPoints = question.totalPoints;
    //   }
    // );
    // this.assignmentsService.getAssignmentById(this.assignmentId).subscribe(
    //   assignment => {
    //     this.totalPoints = assignment.questions.find(question => question.id === this.questionId).totalPoints;
    //   }
    // );

  }
  openAnswers(email: string) {
    this.router.navigate(['/submissions', this.assignmentSlug, 'answers'], {relativeTo: this.route, queryParams : {'email': email}});
  }
}
