import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/core/services/login-service.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  User!: FormGroup
  constructor(private fb: FormBuilder, private service: LoginServiceService, private router: Router) {
    this.User = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      gender: ['']
    });
  }
  ngOnInit(): void {
  }
  addUser() {
    console.log(this.User.value)
    this.service.addData(this.User.value).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('home')
    })
  }
}
