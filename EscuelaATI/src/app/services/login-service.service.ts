import { Injectable } from '@angular/core';
import { UserInterface } from 'src/models/requestObjects';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  logged:UserInterface=null
  constructor() { }

  login(user:UserInterface){
    localStorage.setItem('user', JSON.stringify(user));
    this.logged=user;
  }
  logout(){
    localStorage.setItem('user',null);
    this.logged=null;
  }
  getUser():UserInterface{
    return JSON.parse(localStorage.getItem('user'));
    
  }
}
