import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public global_url:any = "https://www.backend.marksman.pk/public/";
  // public global_url:any = "http://172.16.16.242/backend/public/";
    constructor(public http:HttpClient) { }
    post(url:any,data:any,token:any){
      return this.http.post(this.global_url+url,data);
    }
  
    get(url:any,token:any){
      return this.http.get(this.global_url+url,token);
    }
  }
  
