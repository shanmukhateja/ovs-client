import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TopicService } from '../../services/topic.service';
import { StatusTypes } from 'src/app/shared/models/status-types';

@Component({
  selector: 'app-manage-topics',
  templateUrl: './manage-topics.component.html',
  styleUrls: ['./manage-topics.component.scss']
})
export class ManageTopicsComponent implements OnInit {

  constructor(
    private topicS: TopicService
  ) { }

  addTopicFormGroup: FormGroup = null
  formStatus = ''

  ngOnInit(): void {
    this.addTopicFormGroup = new FormGroup({
      topicTitle: new FormControl('', [Validators.required])
    })
  }

  get topicTitle() {
    return this.addTopicFormGroup.get('topicTitle')
  }

  processRequest() {
    this.topicS.handleAddTopic(this.topicTitle.value)
      .subscribe(
        resp => {
          const { status } = resp
          if (status == StatusTypes.okay) {
            this.formStatus = 'Topic added successfully.'
          } else {
            this.formStatus = 'Something went wrong.'
          }
        },
        err => {
          console.error(err)
          this.formStatus = 'An error occurred.'
        }
      )
  }

}
