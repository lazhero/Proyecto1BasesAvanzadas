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
    return this.http.post_request('clubsList',data)
  }
  getClub(){
    var location = this.login.getUser().Location
    return this.http.get_request('clubsList',{location:location})
  }
  register(data:any){
    return this.http.post_request('User',data)
  }
  addClub(data:any){
    return this.http.post_request('Club',data)
  }
  getTopClubs(){
    var location = this.login.getUser().Location
    return this.http.get_request('Club/ByTop5Clubs',{location:location})
  }
  getBottomClubs(){
    var location = this.login.getUser().Location
    return this.http.get_request('Club/ByBottom3Clubs',{location:location})
  }
  userLogin(data:any){
    return this.http.get_request('User/Login',data)
  }
  getClubsByCategory(){
    var location = this.login.getUser().Location
    return this.http.get_request('Club/Category', {location:location}) //poner el del api
  }

  getTop3Students(){
    var location = this.login.getUser().Location
    return this.http.get_request('Club/Category', {location:location}) //poner el del api
  }
}
