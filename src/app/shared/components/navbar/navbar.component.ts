import { Component, OnInit } from '@angular/core';
import { LandingService } from 'src/app/landing/services/landing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private landingS: LandingService,
    private router: Router
  ) { }

  showLogout = false

  ngOnInit(): void {
    this.showLogout = this.landingS.getUserDetails() != undefined

    // Update logout button status
    this.router.events.subscribe(_ =>{
      this.showLogout = this.landingS.getUserDetails() != undefined
    })
  }

  handleLogout() {
    this.landingS.clearUserDetails()
    this.router.navigateByUrl('/landing/login')
  }

}
