import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { selectCategoryComponent } from './categories/selectedCategory/selectedCategory.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrderedDashboardComponent } from './ordered-dashboard/ordered-dashboard.component';
import { SignupComponent } from './login/signup/signup.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:'forgotPassword', component:ForgotPasswordComponent},
  {path:'signup', component:SignupComponent},
  {path:'category', component:CategoryListComponent},
  {path:'selectCategory', component:selectCategoryComponent},
  {path:'addToCart', component:AddToCartComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'orderedDashboard', component:OrderedDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
