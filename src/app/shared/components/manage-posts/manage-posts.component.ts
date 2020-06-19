import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { StatusTypes } from 'src/app/shared/models/status-types';
import { UserAccountTypes } from 'src/app/shared/models/user-acc-types';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Post } from 'src/app/shared/models/post';
import { PostService } from 'src/app/dashboard/services/post.service';
import { AddPostComponent } from 'src/app/dashboard/components/add-post/add-post.component';
import { ISortInfo, SortOrder, SortTypes } from '../../models/sort-info';
import { fromEvent } from 'rxjs';
import { map, debounceTime, tap } from 'rxjs/operators';
import { SearchHintModalComponent } from '../search-hint-modal/search-hint-modal.component';
import { IPaginationInfo } from '../../models/pagination-info';
import { ViewPostResponsesComponent } from 'src/app/dashboard/components/view-post-responses/view-post-responses.component';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.scss']
})
export class ManagePostsComponent implements OnInit, AfterViewInit {

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

  sortObj: ISortInfo = {
    order: SortOrder.desc,
    type: SortTypes.post_created_at
  }

  sortOrders = SortOrder
  sortTypes = SortTypes

  @ViewChild('dropdownMenu')
  dropdownMenu: ElementRef<HTMLUListElement>

  /**
   * ViewChild el inside *ngIf need to use `setter` model
   * https://stackoverflow.com/a/41095677
   */
  @ViewChild('searchEl') set content(content: ElementRef) {
    if (content) { // initially setter gets called with undefined
      this.searchEl = content;
    }
  }
  searchEl: ElementRef<HTMLElement>

  searchText = ''

  paginationObj = {
    page: 1,
    itemsPerPage: 10,
    totalRows: 0
  }

  ngOnInit(): void {
    // fetch all posts
    this.fetchAllPosts()
  }

  ngAfterViewInit(): void {
    // Init search
    this.initSearchBox()
  }

  initSearchBox() {
    const target = this.searchEl?.nativeElement
    if (target) {
      fromEvent(target, 'keyup')
        .pipe(
          map((x: any) => x.currentTarget.value),
          debounceTime(500), // wait .5sec
          tap(str => this.searchText = str),
          tap(_ => this.fetchAllPosts())
        )
        .subscribe()
    } else {
      // trigger init fn every sec until necessary.
      const i = setInterval(() => {
        this.initSearchBox()
        clearInterval(i)
      }, 1000)
    }
  }

  fetchAllPosts() {
    this.postS.getAllPosts(this.sortObj, this.searchText, this.paginationObj)
      .subscribe(resp => {
        const { status, data, rows_count } = resp
        if (status == StatusTypes.okay) {
          // clear old data
          this.postsList.splice(0, this.postsList.length)
          if (data.length > 0) {
            // reset UI
            this.formStatus = ''
            // add new data
            data.forEach(el => this.postsList.push(el))
            // update total rows count
            this.paginationObj.totalRows = rows_count
          } else {
            // update UI
            this.formStatus = 'No records found.'
          }
        }
      })
  }

  getPage(paginationInfo: IPaginationInfo) {
    this.paginationObj.page = paginationInfo.page
    this.fetchAllPosts()
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

  openSearchHintModal(event) {
    event.preventDefault()
    this.bsModalRef = this.modalS.show(SearchHintModalComponent, {
      backdrop: true,
      keyboard: true
    });
    // close modal event
    (this.bsModalRef.content as SearchHintModalComponent).modalCloseEvent.subscribe(_ => {
      this.bsModalRef.hide()
      this.bsModalRef = null
    })
  }

  openViewResponsesModal(postObj) {
    this.bsModalRef = this.modalS.show(ViewPostResponsesComponent, {
      backdrop: true,
      keyboard: true
    });
    const content = this.bsModalRef.content as ViewPostResponsesComponent
    // Set `post_id` of component and fetch data
    content.postObjSetter = postObj;
    // close modal event
    content.modalCloseEvent.subscribe(_ => {
      this.bsModalRef.hide()
      this.bsModalRef = null
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

  /**
   * Handles post upvote/downvote UI status
   */
  handlePostUI(scoreRowRef: HTMLElement, key: string, rivalKey: string) {
    if (scoreRowRef.classList.contains(rivalKey)) {
      scoreRowRef.classList.remove(rivalKey)
    }
    scoreRowRef.classList.add(key)
  }

}
