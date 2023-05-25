import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { login, signUp } from '../data-types';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnboardService {
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient,private router:Router) { }

  userLogin(data:login){
    return this.http.post("https://ecom-i7ht.onrender.com/customer/login",data,{observe:"response"}).subscribe((result)=>{
      if(result){
        this.isLoggedIn.next(true);
        localStorage.setItem('auth',JSON.stringify(result.body));
        this.router.navigate(['home']);
      }
      console.log(result);
    });;
  }

  userSignUp(data:signUp){
    return this.http.post("https://ecom-i7ht.onrender.com/customer/register",data,{observe:"response"}).subscribe((result:any)=>{
      if(result){
        this.isLoggedIn.next(true);
        localStorage.setItem('auth',JSON.stringify(result.body));
        this.router.navigate(['home']);
      }
      console.log(result);
    });;
  }

  reloadHome(){
    if(localStorage.getItem('auth')){
      this.isLoggedIn.next(true);
      this.router.navigate(['home']);
      console.log("service")
    }
  }
}
