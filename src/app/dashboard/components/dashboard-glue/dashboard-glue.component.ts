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
  ) {
    console.log(router.url.toString())
   }

  @ViewChild('pageWrapper')
  pageWrapper: ElementRef<HTMLDivElement>

  ngOnInit() {
  }

  closeNav() {
    this.pageWrapper.nativeElement.classList.remove('toggled')
  }

  showNav() {
    this.pageWrapper.nativeElement.classList.add('toggled')
  }

}
