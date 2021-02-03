import { Injectable } from '@angular/core';
import {config} from '../config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Title } from '@angular/platform-browser';


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
      `http://${config.host}/${config.endpoints.classroom}/${ClassroomSlug}/enroll?ClassroomSlug=${ClassroomSlug}&email=${email}`,
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
