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

  constructor(private http: HttpClient, private router: Router) { }

  userLogin(data: login) {
    return this.http.post("https://ecomproject-production.up.railway.app/customer/login", data, { observe: "response" }).subscribe((result:any) => {
      if (result) {
        if (result.body.status == 'Success') {
          this.isLoggedIn.next(true);
          localStorage.setItem('auth', JSON.stringify(result.body));
          this.router.navigate(['home']);
        }
      }
      console.log(result);
    });;
  }

  userSignUp(data: signUp) {
    return this.http.post("https://ecomproject-production.up.railway.app/customer/register", data, { observe: "response" }).subscribe((result: any) => {
      if (result) {
        if (result.body.status == 'Success') {
          this.isLoggedIn.next(true);
          localStorage.setItem('auth', JSON.stringify(result.body));
          this.router.navigate(['home']);
        }
      }
      console.log(result);
    });;
  }

  reloadHome() {
    if (localStorage.getItem('auth')) {
      this.isLoggedIn.next(true);
      this.router.navigate(['home']);
      console.log("service")
    }
  }
}
