import { getLocaleCurrencySymbol } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:NetworkService, private login:LoginServiceService) {}

  postClub(data:any){
    var user=this.login.getUser()
    data.creatorId=user.id;
    data.locale=user.locale
    return this.http.post_request('Club',data)
  }
  getClub(){
    var location = this.login.getUser().locale
    return this.http.get_request('Club/All',{locale:location})
  }
  register(data:any){

    return this.http.post_request('User',data)
  }
  addClub(data:any){
    if(data.locale==null){
      var user=this.login.getUser()
      data.locale=user.locale
    }
    return this.http.post_request('Club',data)
  }
  getTopClubs(){
    var location = this.login.getUser().locale
    return this.http.get_request('Club/ByTop5Clubs',{locale:location})
  }
  getBottomClubs(){
    var location = this.login.getUser().locale
    return this.http.get_request('Club/ByBottom3Clubs',{locale:location})
  }
  userLogin(data:any){
    return this.http.get_request('User/Login',data)
  }
  getClubsByCategory(){
    var location = this.login.getUser().locale
    return this.http.get_request('Club/Category', {locale:location}) 
  }

  getTop3Students(){
    var location = this.login.getUser().locale
    return this.http.get_request('Club/Category', {locale:location}) 
  }
}
