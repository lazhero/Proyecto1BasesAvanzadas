import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ApiService } from 'src/app/services/api.service';
import { RedirectService } from 'src/app/services/redirect.service';
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

  location:number;
  constructor(private api:ApiService, private redirect:RedirectService) { }

  ngOnInit(): void {
    this.stepOne().controls['location'].valueChanges.subscribe(
      (value)=>{
        this.location=value;
        this.step2.setLocation(this.location)
        this.step2.getAllClubs()
      }
    )
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
      var user = {
        username:  form1.controls['user'].value,
        password: form1.controls['password'].value,
        name: form1.controls['name'].value,
        classNum: form1.controls['class'].value,
        locale:parseInt(form1.controls['location'].value),
        userType: 'Student',
        id:'0'
      }

      var firstClub={
        name: form2.controls['club'].value,
        category: form2.controls['category'].value,
        locale:parseInt(form1.controls['location'].value),
        id:'0',
        creatorId:''
      }
      var data= {
        club:firstClub,
        user:user
      }
      console.log(data)
      this.api.register(
        data
      ).subscribe({
        next:(value:any)=>{
          this.redirect.redirect('/auth/login')
          this.api.addClub(firstClub)
        },
        error:(err)=>{
          console.log(err)
        }

      })
    }

  }

  

}

