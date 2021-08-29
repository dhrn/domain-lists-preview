import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Domain } from './domain.interface';
import { Observable, of } from 'rxjs';
import { catchError } from "rxjs/operators";
import db from '../../../db.json';


@Injectable({
  providedIn: 'root'
})
export class DomainService {

  private REST_API_SERVER = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getDomainList(): Observable<Domain[]> {
    return this.http.get<Domain[]>(`${this.REST_API_SERVER}/domain_list`)
        .pipe(catchError(() => {
          console.log('server seems downs. serving sample data');
          return of(db.domain_list as any)
        }));
  }
}
