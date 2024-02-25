import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  url = "http://localhost:3000/"
  journey:any;
  constructor( private httpClient:HttpClient) {}
  
  postApiCall(signUpData:any, journey:any){
    console.log("apiService",journey);
    
      let url = this.url + journey;
      console.log("service url : ",url);      
      return this.httpClient.post(url,signUpData);
  }

}
