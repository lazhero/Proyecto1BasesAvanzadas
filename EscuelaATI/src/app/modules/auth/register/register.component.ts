import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { RegisterUserInfoComponent } from '../register-user-info/register-user-info.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('stepper',{static:true}) stepper:MatStepper;
  @ViewChild('info',{static:true}) step1:RegisterUserInfoComponent;


  constructor() { }

  ngOnInit(): void {
  }
  stepOne(){
    return this.step1.userInfoForm;
  }
  goForward(){
    this.stepper.next()
  }
  goBack(){
    this.stepper.previous()
  }
  isLast(){
    return this.stepper.selectedIndex==this.stepper.steps.length-1;
  }
  isFirst(){
    return this.stepper.selectedIndex==0;
  }

  

}

