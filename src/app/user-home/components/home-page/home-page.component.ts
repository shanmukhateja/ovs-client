import { Component, OnInit } from '@angular/core';
import { UserAccountTypes } from 'src/app/shared/models/user-acc-types';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  userAccountTypes = UserAccountTypes

  ngOnInit(): void {
  }

}
