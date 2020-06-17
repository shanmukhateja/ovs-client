import { Injectable } from '@angular/core';
import { getBaseURL } from 'src/server-config';
import { HttpClient } from '@angular/common/http';
import { IGetPosts } from 'src/app/shared/models/get-post-response';
import { Post } from 'src/app/shared/models/post';
import { DefaultResponse } from 'src/app/shared/models/default-response';
import { LandingService } from 'src/app/landing/services/landing.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
    private landingS: LandingService
  ) { }

  private BASE_URL = getBaseURL()

  getAllPosts() {
    const user_id = this.landingS.getUserDetails()?.id.toString()
    return this.http.get<IGetPosts>(`${this.BASE_URL}/posts`, {
      params: { user_id }
    })
  }

  handleAddPost(post: Post) {
    return this.http.post<DefaultResponse>(`${this.BASE_URL}/posts/add`, {
      post_title: post.title,
      post_descr: post.description,
      topic_id: post.topic_id,
      user_id: post.user_id
    })
  }

  handlePostScore(post_id, post_score) {
    const user_id = this.landingS.getUserDetails().id
    return this.http.post<DefaultResponse>(`${this.BASE_URL}/posts/updateScore`, {
      post_id,
      user_id,
      post_score
    })
  }
}
