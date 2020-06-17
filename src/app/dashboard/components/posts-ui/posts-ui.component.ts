import { Component, OnInit } from '@angular/core';
import { UserAccountTypes } from 'src/app/shared/models/user-acc-types';

@Component({
  selector: 'app-posts-ui',
  templateUrl: './posts-ui.component.html',
  styleUrls: ['./posts-ui.component.scss']
})
export class PostsUiComponent implements OnInit {

  constructor() { }

  userAccountTypes = UserAccountTypes

  ngOnInit(): void {
  }

}
