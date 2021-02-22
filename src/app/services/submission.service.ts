import {Injectable} from '@angular/core';
import {RunCodeRequest} from '../models/run-code-request';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {config} from '../config';
import {Observable} from 'rxjs';
import {RunCodeResponse} from '../models/run-code-response';
import {SubmitCodeRequest} from '../models/submit-code-request';
import {SubmitCodeResponse} from '../models/submit-code-response';
import {SubmissionDetailsResponse} from '../models/submissionDetails-response';
import {Question} from '../models/question';
import {SubmissionQuestionDetailsResponse} from '../models/submissionQuestionDetails-response';


@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(
    private http: HttpClient
  ) {
  }

  runCode(request: RunCodeRequest,classroomSlug:string): Observable<RunCodeResponse> {
    return this.http.post<RunCodeResponse>(
      `http://${config.host}/${config.apiVersion.submissionServiceVersion}/submissions/${classroomSlug}/${config.endpoints.runCode}`,
      request, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }

  submitCode(request: SubmitCodeRequest,classroomSlug:string): Observable<SubmitCodeResponse> {
    return this.http.post<SubmitCodeResponse>(
      `http://${config.host}/${config.apiVersion.submissionServiceVersion}/submissions/${classroomSlug}/${config.endpoints.submit}`,
      request, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }


  submissionDetails(assignmentId: string,classroomSlug:string): Observable<SubmissionDetailsResponse []> {
return this.http.get<any>(
  `http://${config.host}/${config.apiVersion.submissionServiceVersion}/submissions/${classroomSlug}/${assignmentId}/`);
  }
  submissionUserDetails(assignmentId: string, email: string,classroomSlug:string): Observable<SubmissionDetailsResponse> {
    return  this.http.get<SubmissionDetailsResponse>(
      `http://${config.host}/${config.apiVersion.submissionServiceVersion}/submissions/${classroomSlug}/${assignmentId}/user?email=${email}`
    );
  }
  getUserResponse(assignmentId: string, questionId: string, email: string,classroomSlug:string): Observable<SubmissionQuestionDetailsResponse>{
return this.http.get<SubmissionQuestionDetailsResponse>(
  `http://${config.host}/${config.apiVersion.submissionServiceVersion}/submissions/${classroomSlug}/${assignmentId}/${questionId}?email=${email}`
);
}


}
