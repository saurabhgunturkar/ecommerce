import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  emailValue: string = '';
  newpassword: string = '';
  confirmpassword: string = '';
  emailsList: string[] = [];
  passwordList: string[] = [];

  constructor(private router: Router, private emailservice: DataService, private http: HttpClient) { }

  ngOnInit(): void {
    this.emailservice.login().subscribe(
      (response: any[]) => {
        this.passwordList = response.map(user => user.password);
        this.emailsList = response.map(user => user.email);
      }
    )
  }
  forgotPassword(): void {
    if (this.newpassword !== this.confirmpassword) {
      console.error('Passwords do not match');
      return;
    }
  
    for (let i = 0; i < this.emailsList.length; i++) {
      debugger
      if (this.emailsList[i] === this.emailValue) {
        // Update the password in the passwordList array
        // this.passwordList[i] = this.newpassword;
        // Make HTTP request to update password in the backend
        debugger
        this.emailservice.forgotPassword(i, this.emailValue, this.newpassword).subscribe({
          next:(val:any) => {
            debugger
            console.log('Password updated successfully', val);
            this.router.navigate(['/login']);
            
debugger
            // Optionally, navigate to a different page or show a success message
          }
        }
        
        
        );
        break; // Exit loop once email is found and password is updated
      }
    }
  }
}

