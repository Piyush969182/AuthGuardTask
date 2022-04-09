import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guard/admin.guard';
import { AddUserComponent } from './presentation/modules/add-user/add-user.component';
import { EditUserComponent } from './presentation/modules/edit-user/edit-user.component';
import { HomeComponent } from './presentation/modules/home/home.component';
import { LoginComponent } from './presentation/modules/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AdminGuard],
    data: {
      role: 'public'
    }
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
