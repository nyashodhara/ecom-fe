import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment, product, productSearch } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private router: Router) { }

  getProducts() {
    const data = {search : "",category:""};
    return this.http.post(environment.apiUrl + "products/list", data, { observe: "response" })
  }
}
