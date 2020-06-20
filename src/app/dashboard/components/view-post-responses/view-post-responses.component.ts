import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPostView } from '../../../shared/models/post-view-response'
import { StatusTypes } from 'src/app/shared/models/status-types';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-view-post-responses',
  templateUrl: './view-post-responses.component.html',
  styleUrls: ['./view-post-responses.component.scss']
})
export class ViewPostResponsesComponent implements OnInit {

  constructor(
    private postS: PostService
  ) { }

  @Input()
  public set postObjSetter(data: Post) {
    this.postObj = data
    this.fetchData()
  }

  /**
   * Use `postObjSetter`. Internal use only
   */
  postObj: Post = {}

  responsesList: IPostView[] = []
  statusText = ''

  modalCloseEvent = new EventEmitter()

  ngOnInit(): void {

  }

  fetchData() {
    this.postS.handleGetPostResponses(this.postObj.id)
      .subscribe(resp => {
        const { status, data } = resp
        if (status == StatusTypes.okay) {
          if (data.length > 0) {
            // update UI
            this.statusText = ''
            // Add new data
            data.forEach(el => this.responsesList.push(el))
          } else {
            this.statusText = 'No records found.'
          }
        }
      })
  }

  handleModalClose() {
    this.modalCloseEvent.emit()
  }

}
