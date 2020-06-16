import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getBaseURL } from 'src/server-config';
import { DefaultResponse } from 'src/app/shared/models/default-response';
import { IGetAllTopics } from 'src/app/shared/models/get-all-topics';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(
    private http: HttpClient
  ) { }

  private BASE_URL = getBaseURL()

  handleAddTopic(title: string) {
    return this.http.post<DefaultResponse>(`${this.BASE_URL}/topics/add`, {
      topic_title: title
    })
  }

  fetchAllTopics() {
    return this.http.get<IGetAllTopics>(`${this.BASE_URL}/topics`)
  }

}
