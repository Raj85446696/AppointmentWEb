import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: any;
  constructor(private http: HttpClient, private router: Router) {}
  loginData = {
    email:'',
    password:''
  }; 
  errorMessage = '';
  loginMessage='';

  showError(message: string) {
  this.errorMessage = message;
  setTimeout(() => this.errorMessage = '', 4000); // hide after 4 sec
}

showLoginMessage(message: string) {
  this.loginMessage = message;
  setTimeout(() => this.loginMessage = '', 4000);
}



  loginUser() {
  this.http.post<any>('http://localhost:8000/login', this.loginData).subscribe({
    next: (res) => {
      localStorage.setItem('token', res.token);

      // 🔥 Store user-specific data
      localStorage.setItem('user', JSON.stringify(res.user));  // 👈 yeh line add karo

      this.errorMessage = '';
      this.showLoginMessage('Login successful! Redirecting...');
      setTimeout(() => this.router.navigate(['/']), 1500);
    },
    error: (err) => {
      this.errorMessage = err.error.message || 'Invalid credentials. Please try again.';
    }
  });
}



}
