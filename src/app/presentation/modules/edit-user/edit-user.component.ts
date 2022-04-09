import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from 'src/app/core/services/login-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  User!: FormGroup
  userId!: number;
  details = {}
  constructor(private fb: FormBuilder, private service: LoginServiceService, private router: Router,  private route: ActivatedRoute,) {
    this.User = this.fb.group({
      name: [''],
      email: [''],
      mobile: [''],
      gender: ['']
    });
  }
  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('userId'));
     this.service.getDataById(this.userId).subscribe(s => {
      console.log(s);
      this.details =s;
      this.User.patchValue(this.details);
    })
  }
  EditUser() {
    console.log(this.User.value)
    this.service.updateData(this.User.value).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('home')
    })
  }
}
