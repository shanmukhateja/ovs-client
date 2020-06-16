import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginResponse } from 'src/app/shared/models/login-response';
import { getBaseURL } from 'src/server-config';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(
    private http: HttpClient
  ) { }

  private BASE_URL = getBaseURL()

  processUserLogin(userName: string, password: string) {
    return this.http.post<ILoginResponse>(`${this.BASE_URL}/users/login`, {
      userName,
      password
    })
  }

  saveUserDetails(userData) {
    localStorage.setItem('userData', JSON.stringify(userData))
  }
}
