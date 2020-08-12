import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor(private myClient:HttpClient) { }
  baseurl = 'https://reqres.in/api/users?page=1';
  getTestimonials(){
    return this.myClient.get(this.baseurl);
  }
}
