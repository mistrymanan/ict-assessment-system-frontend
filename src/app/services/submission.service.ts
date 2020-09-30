import {Injectable} from '@angular/core';
import {RunCodeRequest} from '../models/run-code-request';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {config} from '../config';
import {Observable} from 'rxjs';
import {RunCodeResponse} from '../models/run-code-response';
import {SubmitCodeRequest} from '../models/submit-code-request';
import {SubmitCodeResponse} from '../models/submit-code-response';
import {SubmissionDetailsResponse} from '../models/submissionDetails-response';


@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(
    private http: HttpClient
  ) {
  }

  runCode(request: RunCodeRequest): Observable<RunCodeResponse> {
    return this.http.post<RunCodeResponse>(
      `http://${config.host}/${config.endpoints.runCode}`,
      request, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }

  submitCode(request: SubmitCodeRequest): Observable<SubmitCodeResponse> {
    return this.http.post<SubmitCodeResponse>(
      `http://${config.host}/${config.endpoints.submit}`,
      request, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }

  submissionDetails(assignmentId: string, questionID: string): Observable<SubmissionDetailsResponse []> {
return this.http.get<any>(
  `http://${config.host}/${config.endpoints.submission}/${assignmentId}/${questionID}`);
  }
}
