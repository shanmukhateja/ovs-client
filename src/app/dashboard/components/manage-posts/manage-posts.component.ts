import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { StatusTypes } from 'src/app/shared/models/status-types';
import { UserAccountTypes } from 'src/app/shared/models/user-acc-types';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddPostComponent } from '../add-post/add-post.component';
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.scss']
})
export class ManagePostsComponent implements OnInit {

  constructor(
    private postS: PostService,
    private modalS: BsModalService
  ) { }

  postsList = new Array<Post>()
  formStatus = 'Loading...'

  // Add Post modal stuff
  bsModalRef: BsModalRef = null

  @Input('userAccountType')
  userAccountType = UserAccountTypes.admin

  userAccountTypes = UserAccountTypes

  ngOnInit(): void {
    this.postS.getAllPosts()
      .subscribe(resp => {
        const { status, data } = resp
        if (status == StatusTypes.okay) {
          // clear old data
          this.postsList.splice(0, this.postsList.length)
          // add new data
          data.forEach(el => this.postsList.push(el))
          console.log(data)
        }
      })
  }

  openAddPostModal() {
    this.bsModalRef = this.modalS.show(AddPostComponent, {
      backdrop: true,
      keyboard: true,
    });
    // hide modal on click Close
    (this.bsModalRef.content as AddPostComponent).modalCloseEvent.subscribe(_ => {
      this.bsModalRef.hide()
      this.bsModalRef = null
    })
  }

  handleUpvote(post_id) {

  }

  handleDownvote(post_id) {

  }

}
