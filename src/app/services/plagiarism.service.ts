import { Injectable } from '@angular/core';
import { Plagiarism } from '../models/plagiarism';
import {config} from '../config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlagiarismService {

  constructor(private http:HttpClient) { }

  getPlagiarismReports(classroomSlug:string,assignmentId:string,questionId:string){
    return this.http.get<Plagiarism[]>
    (
      `http://${config.host}/${config.endpoints.plagiarisms}/${classroomSlug}/${assignmentId}/${questionId}`
    );
  }


  createPlagiarismReport(classroomSlug:string,assignmentId:string,questionId:string){
    const data={classroomSlug:classroomSlug,assignmentId:assignmentId,questionId:questionId};
    return this.http.post<Plagiarism>(
      `http://${config.host}/${config.endpoints.plagiarisms}`,
        data,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }

  getPlagiarismReport(plagiarismId:string){
    return this.http.get<Plagiarism>(
      `http://${config.host}/${config.endpoints.plagiarisms}/${plagiarismId}`
    )
  }

}
