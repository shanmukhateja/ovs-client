import { Injectable } from '@angular/core';
import { getBaseURL } from 'src/server-config';
import { HttpClient } from '@angular/common/http';
import { IGetPosts } from 'src/app/shared/models/get-post-response';
import { Post } from 'src/app/shared/models/post';
import { DefaultResponse } from 'src/app/shared/models/default-response';

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

  handleAddPost(post: Post) {
    return this.http.post<DefaultResponse>(`${this.BASE_URL}/posts/add`, {
      post_title: post.title,
      post_descr: post.description,
      topic_id: post.topic_id,
      user_id: post.user_id
    })
  }
}
