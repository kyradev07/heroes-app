import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutAuthPageComponent } from './pages/layout-auth-page/layout-auth-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LayoutAuthPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
