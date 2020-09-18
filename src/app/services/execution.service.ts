import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Program } from '../models/program';
import { config } from '../config';
import { map } from 'rxjs/operators';
import {Assignment} from '../models/assignment';
@Injectable({
  providedIn: 'root'
})
export class ExecutionService {

  constructor(private http: HttpClient) { }
  //'http://35.184.28.10/api/executions/run'
// `http://${config.host}/${config.endpoints.run}`
  runProgram(value: Program) {
    console.log(value);
    return this.http.post<Program>(  
      `http://${config.host}/${config.endpoints.run}`
        , value, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
    });
  }
}
