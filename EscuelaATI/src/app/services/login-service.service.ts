import { Injectable } from '@angular/core';
import { UserInterface } from 'src/models/requestObjects';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  logged:UserInterface=null
  constructor() { }

  login(user:UserInterface){
    this.logged=user;
  }
  logout(){
    this.logged=null;
  }
  getUser():UserInterface{
    return this.logged
  }
}
