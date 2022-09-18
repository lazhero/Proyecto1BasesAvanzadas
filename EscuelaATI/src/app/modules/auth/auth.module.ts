import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import {MatStepperModule} from '@angular/material/stepper';
import { RegisterUserInfoComponent } from './register-user-info/register-user-info.component';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterUserInfoComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule
  ]
})
export class AuthModule { }
