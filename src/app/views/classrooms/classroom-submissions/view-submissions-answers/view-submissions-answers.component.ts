import {Component, OnInit} from '@angular/core';
import {SubmissionDetailsResponse} from '../../../../models/submissionDetails-response';
import {Assignment} from '../../../../models/assignment';
import {ActivatedRoute, Router} from '@angular/router';
import {SubmissionService} from '../../../../services/submission.service';
import {AssignmentsService} from '../../../../services/assignments.service';
import {GlobalConstants} from '../../../../global-constants';
import {Location} from '@angular/common';


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
  classroomSlug:string;
  statusBadge;


  constructor(
    private route: ActivatedRoute,
    private submissionService: SubmissionService,
    private assignmentsService: AssignmentsService,
    private router: Router,
    public location: Location,
  ) {
  }

  ngOnInit(): void {
    this.classroomSlug=this.route.snapshot.paramMap.get('classroomSlug');
    this.assignmentSlug = this.route.snapshot.paramMap.get('assignmentSlug');
    this.email = this.route.snapshot.queryParamMap.get('email');
    this.statusBadge = GlobalConstants.statusBadge;
    // this.questionSlug = this.route.snapshot.paramMap.get('questionSlug');
    this.assignmentsService.getAssignmentBySlug(this.assignmentSlug,this.classroomSlug).subscribe(
      assignment => {
        this.assignmentName = assignment.title;
        this.assignmentId = assignment.id;
        // const question = assignment.questions.find(res => res.slug === this.questionSlug);
        // this.questionId = question.id;
        // this.totalPoints = question.totalPoints;
        this.submissionService
          .submissionUserDetails(this.assignmentId, this.email,this.classroomSlug)
          .subscribe(submissions => {
            console.log(submissions);
            this.submissions = submissions;
          });
      }
    );
  }

  viewBuild(assignmentId: string, questionId: string, email: string, buildId: string) {
    this.router.navigate(['classrooms',this.classroomSlug,'submissions', this.assignmentSlug, 'answers', 'user'],
      {
        queryParams: {'email': email, 'assignmentId': assignmentId, 'questionId': questionId, 'buildId': buildId}
      });
  }

  get statusIconMap() {
    const map = new Map<string, string>();
    map['IN_PROGRESS'] = 'hourglass-2';
    map['COMPLETED'] = 'check-circle';
    map['LATE_SUBMITTED'] = 'clock-o';
    return map;
  }

  removeUnderScore(str: string) {
    return str.split('-').join(' ');
  }
  backButton(){
    this.location.back()
}
}
