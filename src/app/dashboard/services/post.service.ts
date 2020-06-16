import { Injectable } from '@angular/core';
import { getBaseURL } from 'src/server-config';
import { HttpClient } from '@angular/common/http';
import { IGetPosts } from 'src/app/shared/models/get-post-response';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  private BASE_URL = getBaseURL()

  getAllPosts() {
    return this.http.get<IGetPosts>(`${this.BASE_URL}/posts`)
  }
}
