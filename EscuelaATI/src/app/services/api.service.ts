import { getLocaleCurrencySymbol } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:NetworkService) {}

  postClub(data:any){
    return this.http.post_request('clubsList',data)
  }
  getClub(){
    return this.http.get_request('clubsList',{})
  }
  register(data:any){
    return this.http.post_request('user',data)
  }
  addClub(data:any){
    return this.http.post_request('Club',data)
  }
  getTopClubs(){
    return this.http.get_request('Club/ByTop5Clubs',{})
  }
  getBottomClubs(){
    return this.http.get_request('Club/ByBottom3Clubs',{})
  }
}
