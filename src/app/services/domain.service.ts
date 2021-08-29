import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Domain } from './domain.interface';
import { Observable } from 'rxjs';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };


@Injectable({
  providedIn: 'root'
})
export class DomainService {

  private REST_API_SERVER = "http://localhost:3000"

  constructor(private http: HttpClient) { }
  
  getDomainList(){
    return this.http.get<Domain[]>(`${this.REST_API_SERVER}/domain_list`);
  }
}
