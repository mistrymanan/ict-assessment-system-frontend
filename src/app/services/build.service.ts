import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {config} from '../config';
import {Build} from '../models/build';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(private http: HttpClient) { }
    getBuild(buildId: string): Observable<Build> {
      return this.http.get<Build>(
      `http://${config.host}/${config.endpoints.builds}/${buildId}`
    );
    }
}
