import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(
    private http: HttpClient
  ) { }

  private BASE_URL = 'http://localhost:4600'

  processUserLogin(userName: string, password: string) {
    return <any>this.http.post(`${this.BASE_URL}/users/login`, {
      userName,
      password
    })
  }
}
