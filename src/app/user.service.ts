import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //uri = '/users';
  uri = 'http://localhost:8080/users';
  add = 'http://localhost:8080/users/add'
  constructor(private http: HttpClient) { }


  public getUsers() {
    return this
           .http
           .get(`${this.uri}`);
  }

  public postUser(user:User){
    return this
          .http
          .post(`${this.add}`,user);
  }

  
}
