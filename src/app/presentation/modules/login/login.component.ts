import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/core/services/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!: FormGroup
  token!: string
  response: any;
  constructor(private fb: FormBuilder, private loginService: LoginServiceService, private router: Router) {
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.loginService.getData().subscribe(response => {
      console.log(response)
    })
  }
  Login() {
    console.log(this.login.value)
    if (this.login.valid) {
      this.loginService.Login(this.login.value).subscribe(s => {
        console.log(s)
        this.response = s
        localStorage.setItem('token', this.response.token)
        this.router.navigateByUrl('home')
      },
        err => {
          alert("Login failed");
          this.login.reset();
        }
      );
    }
    else {
      console.log("Something went wrong")
      this.login.reset();
    }
  }
  get f() {
    return this.login.controls;
  }
}
