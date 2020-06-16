import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITopic } from 'src/app/shared/models/topic';
import { Post } from 'src/app/shared/models/post';
import { LandingService } from 'src/app/landing/services/landing.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(
    private landingS: LandingService
  ) { }

  formGroup: FormGroup = null
  topicsList = new Array<ITopic>()

  @Output('modalCloseEvent')
  modalCloseEvent = new EventEmitter()


  postObj: Post = {
    id: -1,
    title: '',
    description:'',
    post_counter: 0,
    user_id: '',
    topic_id: '-1',
    created_at: new Date()
  }

  ngOnInit(): void {
    // Init form group
    this.formGroup = new FormGroup({
      topic_id: new FormControl('', [Validators.required]),
      post_title: new FormControl('', [Validators.required]),
      post_descr: new FormControl('', [Validators.required]),
    })
    // init postObj `user_id` field
    this.postObj.user_id = this.landingS.getUserDetails().id.toString()

    // update `topic_id` field in postObj
    this.topic_id.valueChanges.subscribe(
      value => this.postObj.topic_id = value
    )
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

  handleModalClose(event){
    this.modalCloseEvent.emit(event)
  }

}
