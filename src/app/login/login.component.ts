import { Component, OnInit } from '@angular/core';
import { login, signUp } from '../data-types';
import { OnboardService } from '../services/onboard.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private onboard:OnboardService,private router:Router) { }
  showLogin = true
  showErrorMessage = false;

  ngOnInit(): void {
    this.onboard.reloadHome();
  }

  login(data:login):void{
    console.log(data);
    this.onboard.userLogin(data);
    this.showErrorMessage = this.onboard.showError;
    console.log(this.showErrorMessage);
  }

  signUp(data:signUp):void{
    console.log(data);
    this.onboard.userSignUp(data);
    this.showErrorMessage = this.onboard.showError;
    console.log(this.showErrorMessage);
  }

  openLogin(){
    this.showLogin = true
  }

  openSignUp(){
    this.showLogin = false
  }
}
