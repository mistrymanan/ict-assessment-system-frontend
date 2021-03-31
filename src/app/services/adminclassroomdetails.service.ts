import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { AdminClassroomDetails } from '../models/admin-classroom-details';

@Injectable({
  providedIn: 'root'
})
export class AdminclassroomdetailsService {

  constructor(private http: HttpClient) { }

  getAdminClassrooms(){
    return this.http.get<AdminClassroomDetails[]>
    (
      `http://${config.host}/${config.endpoints.classroom}/admin`
    );
  }
}
