import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  formGroup: FormGroup = null

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

}
