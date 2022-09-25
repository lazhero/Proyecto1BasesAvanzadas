import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ApiService } from 'src/app/services/api.service';
import { RegisterClubComponent } from '../register-club/register-club.component';
import { RegisterUserInfoComponent } from '../register-user-info/register-user-info.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('stepper',{static:true}) stepper:MatStepper;
  @ViewChild('info',{static:true}) step1:RegisterUserInfoComponent;
  @ViewChild('club',{static:true}) step2:RegisterClubComponent;


  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  stepOne(){
    return this.step1.userInfoForm;
  }
  stepTwo(){
    return this.step2.clubForm
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

  submit(){
    if(this.stepTwo().valid){
      var form1=this.stepOne()
      var form2=this.stepTwo()
      this.api.register(
        {
          Username:  form1.controls['name'].value,
          Password: form1.controls['password'].value,
          Name: form1.controls['name'].value,
          Section: form1.controls['class'].value,
          UserType: 'Student'
        }
      ).subscribe((
        (value:any)=>{
          var firstClub={
            name: form2.controls['club'],
            category: form2.controls['category'],
            creatorId: value.Id
          }
          this.api.addClub(firstClub)
        }

      ))
    }

  }

  

}

