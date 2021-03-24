import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignmentsService} from '../../../../services/assignments.service';
import {SubmissionService} from '../../../../services/submission.service';
import {SubmissionDetailsResponse} from '../../../../models/submissionDetails-response';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';
import {Assignment} from '../../../../models/assignment';
import { GetSubmissionDetailsResponse } from '../../../../models/GetSubmissionDetailsResponse';

@Component({
  selector: 'app-view-submissions',
  templateUrl: './view-submissions.component.html',
  styleUrls: ['./view-submissions.component.css']
})
export class ViewSubmissionsComponent implements OnInit {
  submissionDetails:GetSubmissionDetailsResponse;
  due: string[];
  totalPoints: number;
  assignment: Assignment;
  assignmentId: string;
  assignmentName: string;
  assignmentSlug;
  classroomSlug:string;
  constructor(
    private route: ActivatedRoute,
    private submissionService: SubmissionService,
    private assignmentsService: AssignmentsService,
    public location: Location,
    private router: Router
  ) {
    //this.submissionDetails=new GetSubmissionDetailsResponse();
  }

  ngOnInit(): void {
    this.classroomSlug=this.route.snapshot.params.classroomSlug;
    this.assignmentSlug = this.route.snapshot.paramMap.get('assignmentSlug');
    // this.questionSlug = this.route.snapshot.paramMap.get('questionSlug');


    this.assignmentsService.getAssignmentBySlug(this.assignmentSlug,this.classroomSlug).subscribe(
      assignment => {
        this.assignment=assignment;
        this.assignmentName = assignment.title;
        this.assignmentId = assignment.id;
        // const question = assignment.questions.find(res => res.slug === this.questionSlug);
        // this.questionId = question.id;
        // this.totalPoints = question.totalPoints;
        this.submissionService
          .submissionDetails(this.assignmentId,this.classroomSlug)
          .subscribe(submissions => {
            console.log(submissions)
            this.submissionDetails=submissions;
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
    this.router.navigate(['classrooms',this.classroomSlug,'submissions', this.assignmentSlug, 'answers'], {queryParams : {'email': email}});
  }
  backButton(){
    this.location.back()
}
}
