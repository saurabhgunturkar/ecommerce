// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000/';
  categerygetName: any;
  

  constructor(private http: HttpClient) { }
  //selected category at the time of shopping
  selectCategory(temp: any): Observable<any> {
    return this.http.get(temp);
  }

  callCategory(category: any): Observable<any> {
    let temp = (`http://localhost:3000/${category}`);
    return this.selectCategory(temp);
  }

  //add product to the category
  addProductToCategory(category: any, item: any): Observable<any> {
    return this.http.post(`http://localhost:3000/${category}`, item);
  }

  //add the order details in "placeOrders[]"
  placeOrderService(orderDetails:any):Observable<any>{
    return this.http.post(`http://localhost:3000/placeOrders`, orderDetails);
  }

  //get the ordered list 
  orderedList():Observable<any>{
    return this.http.get('http://localhost:3000/placeOrders');
  }

  //loginCredentials
  login():Observable<any>{
    return this.http.get('http://localhost:3000/loginCredientials');
  }

  createAccount(accountDetails:any):Observable<any>{
    return this.http.post(`http://localhost:3000/loginCredientials`, accountDetails)
  }

  forgotPassword(id: number,email:any, newpassword: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/loginCredientials/${id}`, {email:email, password: newpassword });
  }

}
