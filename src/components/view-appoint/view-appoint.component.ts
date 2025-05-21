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
}

@Component({
  selector: 'app-view-appoint',
  standalone: true,
  imports: [CommonModule , NavbarComponent, HttpClientModule],
  templateUrl: './view-appoint.component.html',
  styleUrls: ['./view-appoint.component.css']
})
export class ViewAppointComponent implements OnInit {
  Role:string="Doctor";
  formData: FormData[] = [];

   constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<FormData[]>('http://localhost:8000/api/formdata').subscribe({
      next: data => this.formData = data,
      error: err => {
        console.error('API error:', err);
        this.formData = []; 
      }
    });
  }
}
