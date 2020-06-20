import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-glue',
  templateUrl: './dashboard-glue.component.html',
  styleUrls: ['./dashboard-glue.component.scss']
})
export class DashboardGlueComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  @ViewChild('sidebar')
  sidebar: ElementRef<HTMLElement>

  ngOnInit() {
  }

  toggleNav() {
    this.sidebar?.nativeElement.classList.toggle('active')
  }

}
