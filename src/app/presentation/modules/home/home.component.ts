import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/core/services/login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService) { }
  Userlist: any
  ngOnInit(): void {
    this.loginService.getData().subscribe(response => {
      console.log(response)
      this.Userlist = response
    })
  }
  Logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login')
  }
  DeleteUser(userId: number) {
    this.loginService.deleteUser(userId).subscribe(response => {
      console.log(response)
      this.ngOnInit();
    })
  }
}
