import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LandingService } from '../../services/landing.service';
import { Router } from '@angular/router';
import { StatusTypes } from 'src/app/shared/models/status-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private landingS: LandingService,
    private router: Router
  ) { }

  formGroup: FormGroup = null
  loginStatus = ''

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  get userName() {
    return this.formGroup.controls['userName']
  }

  get password() {
    return this.formGroup.controls['password']
  }

  processLogin() {
    const userName = this.userName.value
    const password = this.password.value
    this.landingS.processUserLogin(userName, password)
      .subscribe(
        resp => {
          // reset status
          this.loginStatus = ''
          const { status } = resp
          if(status == StatusTypes.okay) {
            this.loginStatus = 'Redirecting...'
            // Save user info
            this.landingS.saveUserDetails(resp.data)
            // Goto dashboard
            this.router.navigateByUrl('/dashboard/manage-topics')
          } else {
            this.loginStatus = 'Internal error.'
          }
         },
        err => {
          console.error(err)
          this.loginStatus = err.message
        }
      )
  }

}
