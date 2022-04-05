import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  Login(model: Login): Observable<Login> {
    return this.http.post<Login>('https://localhost:44325/api/Authenticate/login', model);
  }
}
