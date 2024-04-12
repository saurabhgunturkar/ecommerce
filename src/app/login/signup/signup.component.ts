import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string = '';
  name: string = '';
  password: string = '';
  errormsg: string = '';
  loading: boolean = false;
  loginDetails: any;

  constructor(private route: Router, private createAccount: DataService) { }
  ngOnInit(): void {
    this.createAccount.login().subscribe(
      (response) => {
        this.loginDetails = response;
        console.log(this.loginDetails);
      },
      (error) => {
        console.error("Error fetching login details:", error);
      }
    );
  }

  accountCreation() {
    const accountDetails = {
      email: this.email,
      password: this.password
    };
  
    if (accountDetails.email === "" || accountDetails.password === "") {
      this.errormsg = "Email and password cannot be empty";
      return; // Exit early if email or password is empty
    }
  
    // Check if the email already exists
    const emailExists = this.loginDetails.some((loginDetail: any) => loginDetail.email === this.email);
    
    if (emailExists) {
      this.errormsg = "Email already exists";
      return; // Exit early if email already exists
    }
  
    // Show loader before API call
    this.loading = true; 
  
    // Make API call to create the account
    this.createAccount.createAccount(accountDetails).subscribe(
      () => {
        alert("Account created successfully!");
        setTimeout(() => {
          this.route.navigate(['/login']);
          this.loading = false; // Hide loader after successful signup
        }, 4000);
      }
    );
  }
  
  



}

