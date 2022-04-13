import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/core/services/login-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginServiceService) { 
  }
  Userlist: any
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    setTimeout(()=>{   
      $('#datatableexample').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 2,
        processing: true,
        lengthMenu : [5, 10, 15]
    } );
    }, 1);
    this.loginService.getData().subscribe(response => {
      console.log(response)
      this.Userlist = response
    })
  }

  Logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('login')
  }
  DeleteUser(userId: number) {
    this.loginService.deleteUser(userId).subscribe(response => {
      console.log(response)
      this.ngOnInit();
    })
  }
}
