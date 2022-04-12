import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './presentation/modules/login/login.component';
import { HomeComponent } from './presentation/modules/home/home.component';
import { AddUserComponent } from './presentation/modules/add-user/add-user.component';
import { EditUserComponent } from './presentation/modules/edit-user/edit-user.component';
import { InterceptorInterceptor } from './core/interceptors/interceptor.interceptor';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // HomeComponent,
    // AddUserComponent,
    // EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
