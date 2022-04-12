import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guard/admin.guard';
import { AddUserComponent } from '../add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AdminGuard],
    // data: {
    //   role: 'public'
    // }
  },
  {
    path: 'add',
    component: AddUserComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'edit/:userId',
    component: EditUserComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
