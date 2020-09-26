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

  runProgramMultipleInputs(sourceCode: string, lang: string, inputs: {id:number|string,input:string}[]){
    const body = {
      source_code: sourceCode,
      inputs: inputs,
      language: lang
    }
    return this.http.post<any>(
      `http://${config.host}/${config.endpoints.runMultiple}`,
      body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    );
  }
}
