import { Injectable } from '@angular/core';
import { getBaseURL } from 'src/server-config';
import { HttpClient } from '@angular/common/http';
import { IGetPosts } from 'src/app/shared/models/get-post-response';
import { Post } from 'src/app/shared/models/post';
import { DefaultResponse } from 'src/app/shared/models/default-response';
import { LandingService } from 'src/app/landing/services/landing.service';
import { ISortInfo } from 'src/app/shared/models/sort-info';
import { IPaginationInfo } from 'src/app/shared/models/pagination-info';
import { IPostViewResponse } from 'src/app/shared/models/post-view-response';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
    private landingS: LandingService
  ) { }

  private BASE_URL = getBaseURL()

  getAllPosts(sortObj: ISortInfo, searchStr: string, pagination_info: IPaginationInfo) {
    const user_id = this.landingS.getUserDetails()?.id.toString()
    return this.http.post<IGetPosts>(`${this.BASE_URL}/posts`, {
      user_id,
      sort_data: sortObj,
      search_value: searchStr,
      pagination_info
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

  handlePostSort(sortObj: ISortInfo) {
    return this.http.post(`${this.BASE_URL}/posts/sort`, { sort_data: sortObj })
  }

  handleGetPostResponses(post_id) {
    return this.http.post<IPostViewResponse>(`${this.BASE_URL}/posts/view-responses`, { post_id })
  }

  handlePostDelete(post_id) {
    return this.http.post<DefaultResponse>(`${this.BASE_URL}/posts`, {post_id})
  }
}
