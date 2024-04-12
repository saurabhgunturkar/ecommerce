import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { CardserviceService } from '../service/cardservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  carditems: any[] = [];
  count = 1;
  backbutton: any = "<< back";
  billingID: any;
  placeOrderForm!: FormGroup;
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
  animal: any;
  name: any;

  constructor(private cardService: CardserviceService, private fb: FormBuilder, private dataService: DataService, public dialog: MatDialog, private route: Router) {
    this.carditems = this.cardService.getItemsToCart();
  }

  ngOnInit(): void {
    this.billingID = this.generateRandomNumber();
    console.log(this.billingID);

    window.paypal.Buttons(
      {
        style: {
          layout: 'horizontal',
          shape: 'rect',
          color: 'blue',
          label: 'paypal'
        },
        createOrder: this.createOrder.bind(this),
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            const orderplaced = [details, ...this.carditems, "billing id: "+ this.billingID]
            this.dataService.placeOrderService(orderplaced).subscribe(
              (response: any) => {
                console.log("Order placed successfully", response);
                this.openDialog(details.id); // Open dialog with order ID
                // this.placeOrderForm.reset();

              });
            this.route.navigate(['/category']);
          })
        },
        onError: (error: any) => {
          console.log(error);
        }
      }
    ).render(this.paymentRef.nativeElement);

  }

  createOrder(data: any, actions: any) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: this.total(),
          currency_code: 'USD',
        },
      }],
    });
  }

  openDialog(billingID: string): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      height: '500px',

      data: { id: billingID, message: "Order placed successfully" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  generateRandomNumber(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomString = '';
    for (let i = 0; i < 3; i++) {
      randomString += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 4; i++) {
      randomString += Math.floor(Math.random() * 10).toString();
    }
    for (let i = 0; i < 3; i++) {
      randomString += Math.floor(Math.random() * 10).toString();
    }
    return randomString;
  }

  total(): any {
    return this.carditems.reduce((total, carditem) => {
      const itemPrice = Number(carditem.price);
      const itemDiscount = Number(carditem.discounts);

      if (isNaN(itemPrice) || isNaN(itemDiscount)) {
        console.error('Invalid data:', carditem);
        return total;
      }

      const discountedPrice = itemPrice - (itemPrice * itemDiscount) / 100;
      return total + discountedPrice * (carditem.count || 1);
    }, 0);
  }

  delete(index: any) {
    this.carditems.splice(index, 1);
  }

  increment(index: any) {
    if (!this.carditems[index].count) {
      this.carditems[index].count = 1;
    } else {
      this.carditems[index].count = Number(this.carditems[index].count) + 1;
    }
    this.count = this.carditems[index].count;

  }

  decrement(index: any) {
    if (this.carditems[index].count && this.carditems[index].count > 0) {
      this.carditems[index].count = Number(this.carditems[index].count) - 1;
      this.count = this.carditems[index].count;
    } else {
      this.count = 0;
    }
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <h1 mat-dialog-title style="text-align: center;margin:50px auto;">Order Placed</h1>
  <div mat-dialog-content style="text-align: center;">
    <!-- <mat-icon>check_circle</mat-icon> -->
    <p style="color:green;">Order placed successfully</p>
    <p>Your Receipt ID: <b>{{data.billingID}}</b></p>
    <p>Your Order ID: <b>{{data.id}}</b></p> <!-- Including the index 0 -->
  </div>
  <div mat-dialog-actions style="text-align: center;justify-content:center">
    <button mat-button (click)="onNoClick()" style="width: 80px;height:auto;">Close</button>
  </div>
  `,
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
