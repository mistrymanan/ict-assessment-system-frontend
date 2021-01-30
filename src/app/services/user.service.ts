import { Injectable } from '@angular/core';
import {config} from '../config';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { User } from '../models/user';
import { NONE_TYPE } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
    `http://${config.host}/${config.endpoints.users}/${emailId}`,NONE_TYPE)
}
getRequest(emailID:String){
  return this.http.get<User>(
    `http://${config.host}/${config.endpoints.users}/${emailID}`
  )
}

}