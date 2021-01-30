import { Injectable } from '@angular/core';
import {config} from '../config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {

  constructor(private http:HttpClient) { }

  createClassroom(titleValue:string){
    const data={title:titleValue}
    return this.http.post(
      `http://${config.host}/${config.endpoints.classroom}`,
       data,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }
   
  enrollUser(ClassroomSlug:String, email:String){
    const data={slug:ClassroomSlug, emailId:email}
    return this.http.post(
      `http://${config.host}/${config.endpoints.classroom}/${ClassroomSlug}/enroll`,
       data,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }
}