import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {

  constructor() { }

  carditems:any[] = [];

  addToCart(item:any){
    this.carditems.push(item);
  }

  getItemsToCart(){
    return this.carditems;
  }
  
}
