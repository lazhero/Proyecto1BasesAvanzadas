import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-register-user-info',
  templateUrl: './register-user-info.component.html',
  styleUrls: ['./register-user-info.component.css']
})
export class RegisterUserInfoComponent implements OnInit {

  userInfoForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.userInfoForm=new FormGroup(
      {
        name:new FormControl('',[Validators.required]),
        username:new FormControl('',[Validators.required]),
        password:new FormControl('',[Validators.required,Validators.minLength(8)]),
        class:new FormControl('',[]),
        location:new FormControl('',[Validators.required])


      }
    )
  }

}
