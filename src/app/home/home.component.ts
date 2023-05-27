import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product, productSearch } from '../data-types';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,private homeService:HomeService) { }
  products:product[] | undefined;
  name:String='';

  ngOnInit(): void {
    this.homeService.getProducts().subscribe((result:any)=>{
      console.warn(result.body.data);
      this.products=result.body.data;
      console.log(this.products)
    })
    if(localStorage.getItem('auth')){
      let profile = localStorage.getItem('auth');
      let profileData = profile && JSON.parse(profile);
      this.name = profileData.data.name;
    }
  }

  logout(){
    localStorage.removeItem('auth');
    this.route.navigate(['/']);
  }

}
