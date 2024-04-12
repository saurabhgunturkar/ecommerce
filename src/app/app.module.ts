import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { selectCategoryComponent } from './categories/selectedCategory/selectedCategory.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { DataService } from './data.service';
// import { PaymentTransactionComponent } from './payment-transaction/payment-transaction.component';
import {MatDialogModule} from '@angular/material/dialog';
import { OrderedDashboardComponent } from './ordered-dashboard/ordered-dashboard.component';
// import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { SignupComponent } from './login/signup/signup.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    selectCategoryComponent,
    AddToCartComponent,
    CategoryListComponent,
    LoginComponent,
    AddProductComponent,
    // PaymentTransactionComponent,
    OrderedDashboardComponent,
    SignupComponent,
  
    ForgotPasswordComponent,
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatTableModule,
    MatDividerModule
 
    
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
