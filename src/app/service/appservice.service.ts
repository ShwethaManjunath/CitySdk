import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http:HttpClient) { 
    
  }


    getCityDetails(){
    return (
    this.http.get<any>('http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=10'));
  }
}
