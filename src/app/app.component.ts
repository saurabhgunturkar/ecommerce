import { Component, Input, OnInit } from '@angular/core';
import { LoginServiceService } from './login/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


  title = 'ecommerce';
  // isLoggedIn: boolean = false;

  constructor(private loginService: LoginServiceService) { }

  onLogout() {
    this.loginService.logout();
  }

  get isLoggedIn(): boolean {
    return this.loginService.isAuthenticated();
  }


  
}
