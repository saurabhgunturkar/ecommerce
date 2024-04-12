import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // emailvalue: string = 'saurabhgunturkar07@gmail.com';
  email: string = '';
  // passwordvalue: string = 'Saurabh@123';
  password: string = '';
  errormsg: string = '';
  isLoggedIn: boolean = false;
  @Output() loggedIn = new EventEmitter<boolean>();

  loginDetails: any[] = [];

  constructor(private router: Router, private dataService: DataService, private loginService:LoginServiceService ) { }

  ngOnInit(): void {
    this.dataService.login().subscribe(
      (response) => {
        this.loginDetails = response;
        console.log(this.loginDetails)
      }
    )
  }



  login1() {
    // Track login status
    
    for (let i = 0; i < this.loginDetails.length; i++) {
        if (this.email == this.loginDetails[i].email) {
            if (this.password == this.loginDetails[i].password) {
                // isLoggedIn = true;
                this.loginService.login();
                this.router.navigate(['/category']);
                // this.loggedIn.emit(isLoggedIn);
                
               // Exit the method since login succeeded
            } else {
                this.errormsg = 'Please check your password';
                return; // Exit the method since password doesn't match
            }
        }
    }
    // If the loop completes without finding matching credentials
    this.errormsg = 'Invalid credentials!';
}





}
