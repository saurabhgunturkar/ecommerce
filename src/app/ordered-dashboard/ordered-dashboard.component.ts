import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-ordered-dashboard',
  templateUrl: './ordered-dashboard.component.html',
  styleUrls: ['./ordered-dashboard.component.css']
})
export class OrderedDashboardComponent implements OnInit {

  orderedList: any[] = [];
  productDetails: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.orderedList().subscribe(
      (response) => {
        console.log(response);
        this.orderedList = response;

        for (let i = 0; i < this.orderedList.length; i++) {
          let products: any[] = []; // Define products as an array

          // Ensure that orderedList[i] is an array and has elements
          if (Array.isArray(this.orderedList[i]) && this.orderedList[i].length > 0) {
            // Loop over each product in the order
            for (let j = 1; j < this.orderedList[i].length; j++) {
              // Skip the first element (index 0) as it seems to be an identifier or something else

              products.push(this.orderedList[i]?.[j]);
            }
          }

          // Push products of current order to productDetails array
          this.productDetails.push(products);
        }
        console.log(this.productDetails);
      }
    );
  }

  getLastValue(item: any): string {
    const keys = Object.keys(item); //shallow copy concept
    return item[keys[keys.length - 2]];
  }

  getProductDetails(item: any): any[] {
    const productKeys = Object.keys(item);
    const products: any[] = [];

    // Start from the second-to-last key (length - 2) down to the second key (index 1)
    for (let i = productKeys.length - 3; i >= 1; i--) {
      const key = productKeys[i];
      const product = {
        productID: item[key].proudctID,
        productName: item[key].productname,
        price: item[key].price,
        discounts: item[key].discounts,
        features: item[key].features
      };
      products.push(product);
    }

    return products;
  }











}
