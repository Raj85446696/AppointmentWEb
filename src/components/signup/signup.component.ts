import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,NgIf,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private http: HttpClient) {}
  signUpdaata = {
    name: "" ,
    email: "" ,
    password: "",
    confpassword : "",
    role:""
  }

  submitForm() {
    console.log("signup sucessfully");
    console.log(this.signUpdaata);
    Swal.fire({
      title: 'Sign Up Successfully!',
      text: 'Now you can login!',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6'
    });

    this.http.post('http://localhost:8000/signup',this.signUpdaata).subscribe(response=>{
      console.log('Form successfully submit',response);
    })

    this.signUpdaata = {
      name:'',
      email:'',
      password:'',
      confpassword:'',
      role:''
    }
  }
}
