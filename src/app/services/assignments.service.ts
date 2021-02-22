import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {Assignment} from '../models/assignment';
import {config} from '../config';
import {map} from 'rxjs/operators';
import {ActiveAssignment} from '../models/active-assignment';
import {ActiveAssignmentDetails} from '../models/active-assignment-details';
import {UserQuestion} from '../models/user-question';
import {Question} from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  // private _assignments = new BehaviorSubject<Assignment[]>([]);
  // private assignments: Assignment[] = [];

  // get assignments$() {
  //   return this._assignments.asObservable();
  // }
  constructor(private http: HttpClient) {

  }

  getAllActiveAssignments(classroomSlug:string): Observable<ActiveAssignment[]> {
    return this.http.get<any>(
      `http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/${config.endpoints.activeAssignments}`
    ).pipe(map(res => res.activeAssignments));
  }

  getActiveAssignmentBySlug(slug: string,classroomSlug:string): Observable<ActiveAssignmentDetails> {
    return this.http.get<ActiveAssignmentDetails>(
      `http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/${config.endpoints.activeAssignmentBySlug}/${slug}`
    );
  }

  getUserQuestion(assignmentSlug: string, questionSlug: string, classroomSlug:string) {
    return this.http.get<UserQuestion>(
      `http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/${config.endpoints.getUserQuestion}?assignmentSlug=${assignmentSlug}&questionSlug=${questionSlug}`,
    );
  }

  getQuestion(assignmentSlug: string, questionSlug: string,classroomSlug: string) {
    return this.http.get<Question>(`http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/${config.endpoints.questions}?assignmentSlug=${assignmentSlug}&questionSlug=${questionSlug}`,
    );
  }

  updateQuestion(assignmentId: string, questionId: string, question: Question,classroomSlug: string) {
    question.id = questionId;
    const data = {assignmentId: assignmentId, question: question};
    return this.http.put(
      `http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/${config.endpoints.updateQuestion}`,
      data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }
  startAssignment(assignmentId: string,classroomSlug: string) {
    return this.http.patch(
      `http://${config.host}/${config.apiVersion.submissionServiceVersion}/submissions/${classroomSlug}/${config.endpoints.startAssignment}/${assignmentId}`, null
    );
  }

  deleteQuestion(assignmentId: string, questionId: string,classroomSlug: string) {
    return this.http.delete(
      `http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/${config.endpoints.deleteQuestion}?assignmentId=${assignmentId}&questionId=${questionId}`,
    );
  }

  getAllAssignments(classroomSlug: string): Observable<Assignment[]> {
    return this.http.get<any>(
      `http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/${config.endpoints.assignments}`
    ).pipe(map(res => res.assignments));
  }

  getAssignmentById(assignmentId: String,classroomSlug: string): Observable<Assignment> {
    return this.http.get<Assignment>(
      `http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/${config.endpoints.getAssignment}/${assignmentId}`);
  }

  // loadAllAssignments(): void {
  //   console.log('Assignments loaded');
  //   this.http.get<any>(
  //     `http://${config.host}/${config.endpoints.assignments}`
  //   ).pipe(map(res => res.assignments))
  //     .subscribe(data => {
  //       this.assignments = data;
  //       this._assignments.next(Array.from(this.assignments));
  //     },
  //       error => console.log("Cannot load assignments"));
  // }

  createAssignment(value: Assignment,classroomSlug:string) {
    return this.http.post<Assignment>(
      `http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/`,
      value, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      });
  }

  updateAssignment(assignmentID: string, assignment: Assignment,classroomSlug:string) {
    return this.http.put(
      `http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/${config.endpoints.updateAssignment}/${assignmentID}`,
      assignment, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }

  deleteAssignment(id: string,classroomSlug:string) {
    return this.http.delete(`http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/${config.endpoints.deleteAssignment}/${id}`);
  }

  toggleAssignmentStatus(id: string,classroomSlug:string) {
    return this.http.patch(`http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/${config.endpoints.toggleAssignmentStatus}/${id}`, null);
  }

  getAssignmentBySlug(slug: string,classroomSlug: string) {
    return this.http.get<Assignment>(`http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/${config.endpoints.getAssignmentBySlug}/${slug}`);
  }

  addQuestionToAssignment(assignmentSlug:string, question,classroomSlug:string) {
    return this.http.post<any>(
      `http://${config.host}/${config.apiVersion.assignmentsServiceVersion}/assignments/${classroomSlug}/${config.endpoints.addQuestion}`,
      Object.assign({assignmentSlug: assignmentSlug}, question),
      {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
          }
        )
      }
    );
  }
}
