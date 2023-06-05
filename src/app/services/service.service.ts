import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incription } from '../models/incription.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  sendIncription(data:Incription){
   return  this.http.post("https://backendtaxi.azurewebsites.net/inscription/",data)
  }
}
