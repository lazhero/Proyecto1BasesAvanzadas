import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms'
import{Validators} from '@angular/forms'
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  constructor(private alerts:SweetAlertService) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup(
      {
        email: new FormControl('',[Validators.email,Validators.required]),
        password:new FormControl('',[Validators.required,Validators.minLength(8)])
      }
    )
  }

  log(){
    if(!this.loginForm.valid){
      this.alerts.showError('Error','Datos Incorrectos')
    }
  }

}
