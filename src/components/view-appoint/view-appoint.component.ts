import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  age: string;
  gender: string;
  disease: string;
  doctor:string
}

@Component({
  selector: 'app-view-appoint',
  standalone: true,
  imports: [CommonModule , NavbarComponent, HttpClientModule],
  templateUrl: './view-appoint.component.html',
  styleUrls: ['./view-appoint.component.css']
})
export class ViewAppointComponent implements OnInit {
  Role:string= 'Doctor';  // Doctor
  formData: FormData[] = [];
  view = 'reject' ; 

   constructor(private http: HttpClient) {}

  ngOnInit() {

    this.http.get<{Role:string}>('http://localhost:8000/signup').subscribe({
      next:data=>this.Role=data.Role,
    
      error:err=>{
        console.error('Error Fetching role',err);
      }
    });

    this.http.get<FormData[]>('http://localhost:8000/api/formdata').subscribe({
      next: data => this.formData = data,
      error: err => {
        console.error('API error:', err);
        this.formData = []; 
      }
    });
  }


}
