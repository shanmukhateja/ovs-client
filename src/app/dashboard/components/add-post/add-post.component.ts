import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITopic } from 'src/app/shared/models/topic';
import { Post } from 'src/app/shared/models/post';
import { LandingService } from 'src/app/landing/services/landing.service';
import { TopicService } from '../../services/topic.service';
import { StatusTypes } from 'src/app/shared/models/status-types';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(
    private landingS: LandingService,
    private topicS: TopicService,
    private postS: PostService
  ) { }

  formGroup: FormGroup = null
  topicsList = new Array<ITopic>()

  @Output('modalCloseEvent')
  modalCloseEvent = new EventEmitter()


  postObj: Post = {
    id: -1,
    title: '',
    description: '',
    post_counter: 0,
    user_id: '',
    topic_id: '-1',
    created_at: new Date()
  }

  formStatus = ''

  ngOnInit(): void {
    // Init form group
    this.formGroup = new FormGroup({
      topic_id: new FormControl('', [Validators.required]),
      post_title: new FormControl('', [Validators.required]),
      post_descr: new FormControl('', [Validators.required]),
    })
    // init postObj `user_id` field
    this.postObj.user_id = this.landingS.getUserDetails().id.toString()

    // update postObj fields from FormControls
    this.topic_id.valueChanges.subscribe(
      value => this.postObj.topic_id = value
    )
    this.post_title.valueChanges.subscribe(
      value => this.postObj.title = value
    )
    this.post_descr.valueChanges.subscribe(
      value => this.postObj.description = value
    )

    // Fetch all topics
    this.topicS.fetchAllTopics()
      .subscribe(resp => {
        const { status, data } = resp
        if (status == StatusTypes.okay) {
          data.forEach(el => this.topicsList.push(el))
        } else {
          this.formStatus = 'No topics found'
        }
      })
  }

  get topic_id() {
    return this.formGroup.get('topic_id')
  }

  get post_title() {
    return this.formGroup.get('post_title')
  }

  get post_descr() {
    return this.formGroup.get('post_descr')
  }

  handleModalClose(event) {
    this.modalCloseEvent.emit(event)
  }

  handleProcessRequest() {
    this.formStatus = ''
    this.postS.handleAddPost(this.postObj)
      .subscribe(
        resp => {
          const { status } = resp
          if (status == StatusTypes.okay) {
            this.formStatus = 'Post added successfully.'
          } else {
            this.formStatus = 'Something went wrong.'
          }
        },
        err => {
          console.error(err)
          this.formStatus = err.message
        }
      )
  }
}
