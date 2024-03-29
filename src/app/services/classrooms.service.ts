import { Injectable } from '@angular/core';
import {config} from '../config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ClassroomUserResponse } from '../models/ClassroomUserResponse';
import { Classroom } from '../models/Classroom';


@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {

  constructor(private http:HttpClient) { }

  getUserClassrooms(){
    return this.http.get<ClassroomUserResponse>
    (
      `http://${config.host}/${config.endpoints.classroom}`
    );
  }


  createClassroom(titleValue:string,instructorsEmail:string[]){
    const data={title:titleValue,instructors:instructorsEmail}
    console.log(data);
    return this.http.post<Classroom>(
      `http://${config.host}/${config.endpoints.classroom}`,
        data,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }
   
  enrollUser(ClassroomSlug:String, email:String[]){
    const data={users:email}
    return this.http.post(
      `http://${config.host}/${config.endpoints.classroom}/${ClassroomSlug}/enroll`,
       data,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }
  
  unrollUser(ClassroomSlug:String, email:String){
    return this.http.delete(
      `http://${config.host}/${config.endpoints.classroom}/${ClassroomSlug}/enroll/${email}/`,
    );
  }
  
  addInstructor(ClassroomSlug:String, emails:String[]){
    const data={instructors:emails}
    return this.http.post(
      `http://${config.host}/${config.endpoints.classroom}/${ClassroomSlug}/instructors`,
       data,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );

 }
    removeInstructor(ClassroomSlug:String, email:String){
      return this.http.delete(
        `http://${config.host}/${config.endpoints.classroom}/${ClassroomSlug}/instructors?ClassroomSlug=${ClassroomSlug}&email=${email}`,
      );
}
    getClassroomDetails(ClassroomSlug: string){
      return this.http.get<Classroom>(
    `http://${config.host}/${config.endpoints.classroom}/${ClassroomSlug}`
    );
}

inviteInstructor(ClassroomSlug:string, email:String){
  const data={slug:ClassroomSlug, emailId:email}
    return this.http.post(`http://${config.host}/${config.endpoints.classroom}/${ClassroomSlug}/instructors`,
    data,{
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
     })
    }
    );
}
}
