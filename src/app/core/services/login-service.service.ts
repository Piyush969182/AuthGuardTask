import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/add.model';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  Login(model: Login): Observable<Login> {
    return this.http.post<Login>('https://localhost:44310/api/Authenticate/login', model);
  }
  getData(): Observable<User> {
    return this.http.get<User>('https://localhost:44310/api/Users/GetUsers');
  }
  getDataById(userId: number): Observable<User> {
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.http.get<User>('https://localhost:44310/api/Users/GetUserById', {params: params});
  }
  addData(model: User): Observable<User> {
    return this.http.post<User>('https://localhost:44310/api/Users/AddUser', model)
  }
  updateData(model: User): Observable<User> {
    return this.http.put<User>('https://localhost:44310/api/Users/UpdateUser',model)
  }
  deleteUser(userId: number): Observable<User> {
    let params = new HttpParams();
    params = params.append('userId', userId);
    return this.http.delete<User>('https://localhost:44310/api/Users/DeleteUser',{params: params});
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
