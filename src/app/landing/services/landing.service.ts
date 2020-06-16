import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginResponse } from 'src/app/shared/models/login-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(
    private http: HttpClient
  ) { }

  private BASE_URL = 'http://localhost:4600'

  processUserLogin(userName: string, password: string) {
    return <Observable<ILoginResponse>>this.http.post(`${this.BASE_URL}/users/login`, {
      userName,
      password
    })
  }

  saveUserDetails(userData) {
    localStorage.setItem('userData', JSON.stringify(userData))
  }
}
