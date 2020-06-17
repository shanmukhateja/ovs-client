import { Component, OnInit, Input } from '@angular/core';
import { StatusTypes } from 'src/app/shared/models/status-types';
import { UserAccountTypes } from 'src/app/shared/models/user-acc-types';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/dashboard/services/post.service';
import { AddPostComponent } from 'src/app/dashboard/components/add-post/add-post.component';

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
    // fetch all posts
    this.fetchAllPosts()
  }

  fetchAllPosts() {
    this.postS.getAllPosts()
      .subscribe(resp => {
        const { status, data } = resp
        if (status == StatusTypes.okay) {
          // clear old data
          this.postsList.splice(0, this.postsList.length)
          // add new data
          data.forEach(el => this.postsList.push(el))
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
      // refresh list
      this.fetchAllPosts()
    })
  }

  handleUpvote(post_id) {
    // update UI
    const scoreRowRef = document.getElementById(`score-row-${post_id}`)
    this.postS.handlePostScore(post_id, 'true')
      .subscribe(
        resp => {
          const { status } = resp
          if (status == StatusTypes.okay) {
            this.handlePostUI(scoreRowRef, 'up', 'down')
            this.fetchAllPosts()
          } else {
            alert('Internal error.')
          }
        },
        err => {
          console.error(err)
          alert('Something went wrong')
        }
      )
  }

  handleDownvote(post_id) {
    const scoreRowRef = document.getElementById(`score-row-${post_id}`)
    this.postS.handlePostScore(post_id, 'false')
      .subscribe(
        resp => {
          const { status } = resp
          if (status == StatusTypes.okay) {
            this.handlePostUI(scoreRowRef, 'down', 'up')
            this.fetchAllPosts()
          } else {
            alert('Internal error.')
          }
        },
        err => {
          console.error(err)
          alert('Something went wrong')
        }
      )
  }

  handlePostUI(scoreRowRef: HTMLElement, key: string, rivalKey: string) {
    if (scoreRowRef.classList.contains(rivalKey)) {
      scoreRowRef.classList.remove(rivalKey)
    }
    scoreRowRef.classList.add(key)
  }

}
