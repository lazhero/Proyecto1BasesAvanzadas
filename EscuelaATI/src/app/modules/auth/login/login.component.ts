import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms'
import{Validators} from '@angular/forms'
import { ApiService } from 'src/app/services/api.service';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { RedirectService } from 'src/app/services/redirect.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { UserInterface } from 'src/models/requestObjects';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  constructor(private alerts:SweetAlertService,private api:ApiService,private logService:LoginServiceService,private redirect:RedirectService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup(
      {
        username: new FormControl('',[Validators.required]),
        password:new FormControl('',[Validators.required,Validators.minLength(8)])
      }
    )
  }

  log(){
    if(!this.loginForm.valid){
      var loginData={
        username:this.loginForm.controls['username'].value,
        password:this.loginForm.controls['password'].value
      }
      this.api.userLogin(loginData).subscribe(
        (user:UserInterface)=>{
          this.logService.login(user);
          var UserType:string=user.userType;
          if(UserType=='Student'){
            this.redirect.redirect('/student')
          }
          else{
            this.redirect.redirect('/admin')
          }
        },
        ()=>{
          this.alerts.showError('Error','No ha sido posible iniciar sesion')
        }
      )
      
    }
    
  }

}
