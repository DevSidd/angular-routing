import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserManagementService {
  loggedStatus: boolean = false;
  constructor(private httpClient: HttpClient) {}
  loginAuthenticate(userName: string, password: string) {
    return this.httpClient.post('http://localhost:3200/user/login', {
      userName: userName,
      password: password,
    });
  }
  signUpService(userName: string, password: string, email: string) {
    return this.httpClient.post('http://localhost:3200/user/signUp', {
      userName: userName,
      password: password,
      email: email,
    });
  }
  setLoggedIn(value: boolean) {
    this.loggedStatus = value;
  }
}
