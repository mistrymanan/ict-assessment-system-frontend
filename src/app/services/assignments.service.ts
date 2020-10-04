import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Assignment } from '../models/assignment';
import { config } from '../config';
import { map } from 'rxjs/operators';
import { ActiveAssignment } from '../models/active-assignment';
import { ActiveAssignmentDetails } from '../models/active-assignment-details';
import { UserQuestion } from '../models/user-question';
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
  getAllActiveAssignments(): Observable<ActiveAssignment[]> {
    return this.http.get<any>(
      `http://${config.host}/${config.endpoints.activeAssignments}`
    ).pipe(map(res => res.activeAssignments));
  }
  getActiveAssignmentBySlug(slug: string): Observable<ActiveAssignmentDetails> {
    return this.http.get<ActiveAssignmentDetails>(
      `http://${config.host}/${config.endpoints.activeAssignmentBySlug}/${slug}`
    );
  }
  getUserQuestion(assignmentSlug: string, questionSlug: string) {
    return this.http.get<UserQuestion>(
      `http://${config.host}/${config.endpoints.getUserQuestion}?assignmentSlug=${assignmentSlug}&questionSlug=${questionSlug}`,
    );
  }
  getQuestion(assignmentSlug: string, questionSlug: string) {
    return this.http.get<Question>(`http://${config.host}/${config.endpoints.questions}?assignmentSlug=${assignmentSlug}&questionSlug=${questionSlug}`,
    );
  }

  updateQuestion(assignmentID: string, questionId: string, question: Question) {
    question.id = questionId;
    const data = {assignmentId: assignmentID, question: question};
    return this.http.put(
      `http://${config.host}/${config.endpoints.updateQuestion}`,
      data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }


  deleteQuestion(assignmentId: string, questionId: string) {
    return this.http.delete(
      `http://${config.host}/${config.endpoints.deleteQuestion}?assignmentId=${assignmentId}&questionId=${questionId}`,
    );
  }
  getAllAssignments(): Observable<Assignment[]> {
    return this.http.get<any>(
      `http://${config.host}/${config.endpoints.assignments}`
    ).pipe(map(res => res.assignments));
  }
  getAssignmentById(assignmentId: String): Observable<Assignment> {
    return this.http.get<Assignment>(
      `http://${config.host}/${config.endpoints.getAssignment}/${assignmentId}`);
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

  createAssignment(value: Assignment) {
    return this.http.post<Assignment>(
      `http://${config.host}/${config.endpoints.createAssignment}`,
      value, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }
  updateAssignment(assignmentID: string, assignment: Assignment) {
    return this.http.put(
      `http://${config.host}/${config.endpoints.updateAssignment}/${assignmentID}`,
      assignment, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }
  deleteAssignment(id: string) {
    return this.http.delete(`http://${config.host}/${config.endpoints.deleteAssignment}/${id}`);
  }
  toggleAssignmentStatus(id: string) {
    return this.http.patch(`http://${config.host}/${config.endpoints.toggleAssignmentStatus}/${id}`, null);
  }
  getAssignmentBySlug(slug: string) {
    return this.http.get<Assignment>(`http://${config.host}/${config.endpoints.getAssignmentBySlug}/${slug}`);
  }
  addQuestionToAssignment(id, question) {
    return this.http.post<any>(
      `http://${config.host}/${config.endpoints.addQuestion}`,
      Object.assign({assignmentId: id}, question),
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
