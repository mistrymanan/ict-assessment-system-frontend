import { Injectable } from '@angular/core';
import {config} from '../config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { User } from '../models/user';
import { NONE_TYPE } from '@angular/compiler';
import { AdminUser } from '../models/admin-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  patchClassroomCreation: any;

  constructor(private http:HttpClient) { }
  createUser(email:String){
    const data={emailId:email};
    return this.http.post<User>(
      `http://${config.host}/${config.endpoints.users}` ,
      data,
       {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }

    )
  });
}

patch(emailId:String){
  return this.http.patch<User>(
    `http://${config.host}/${config.endpoints.users}/${emailId}/`,NONE_TYPE)
}
getRequest(emailID:String){
  return this.http.get<User>(
    `http://${config.host}/${config.endpoints.users}/${emailID}/`
  )
}

getadminUser(){
  return this.http.get<AdminUser[]>(
    `http://${config.host}/${config.endpoints.users}/admin`

  )
}

patchAdminAccess(emailId:String){
  return this.http.patch(
    `http://${config.host}/${config.endpoints.users}/${emailId}/adminAccess`,NONE_TYPE)
  }

  patchClassroomCreationAccess(emailId:String){
    return this.http.patch(
      `http://${config.host}/${config.endpoints.users}/${emailId}/createClassroomAccess`,NONE_TYPE)
    }


}