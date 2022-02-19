import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import { Product } from '../products/product';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  logIn(): Observable<Product> {
    const productUrl = "http://localhost:3000/product/";

    return this.httpClient.get<Product>(productUrl); // return an observable
  }

}
