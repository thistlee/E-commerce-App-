import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product>{
    const productUrl = "http://localhost:3000/product/";

    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  viewProduct(productId:any): Observable<Product> {
    const baseUrl = "http://localhost:3000/product/"+productId;
    return this.httpClient.get<Product>(baseUrl);
  }

  searchCategoryProducts(categoryId:any) {
    const baseUrl = "http://localhost:3000/product?categoryId="+categoryId;
    return this.httpClient.get<Product>(baseUrl);
  }

  getCategory() {
    const categoryUrl = "http://localhost:3000/categories";
    return this.httpClient.get<Category>(categoryUrl);
  }

  createProduct(productBody:any):Observable<Product>{
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.post<Product>(baseUrl,productBody);
  }

  updateProduct(productId:any,productBody:any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/"+productId;
    return this.httpClient.put<Product>(baseUrl,productBody);
  }

  deleteProduct(productId:any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/"+productId;
    return this.httpClient.delete<Product>(baseUrl);
  }
  
  
  }

