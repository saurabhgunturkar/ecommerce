import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private isLoggedIn = false;

  constructor() {
    // Check if user was previously logged in (e.g., using local storage)
    this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
  }

  

  login() {
    // Perform login logic
    this.isLoggedIn = true;
    // Store the login status in local storage to persist it
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    // Perform logout logic
    this.isLoggedIn = false;
    // Remove login status from local storage
    localStorage.removeItem('isLoggedIn');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
