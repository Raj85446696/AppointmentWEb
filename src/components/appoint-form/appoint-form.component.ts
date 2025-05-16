import { NgFor, NgIf } from '@angular/common';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-appoint-form',
  standalone: true,
  imports: [NgIf,FormsModule,NgFor,HttpClientModule ,NavbarComponent],
  templateUrl: './appoint-form.component.html',
  styleUrl: './appoint-form.component.css'
})
export class AppointFormComponent {
  constructor(private http: HttpClient) {}

  currentStep = 1;
  steps = ['Patient Info', 'Choose Doctor', 'Date & Time', 'Confirm'];

  formData = {
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    time: '',
    age:'',
    gender:'',
    disease:'',
    govtId:'',
  };

  nextStep() {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitForm() {
    console.log('Appointment Booked:', this.formData);
    Swal.fire({
      title: 'Appointment Confirmed!',
      text: 'Your appointment has been successfully booked. We will contact you shortly!',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6'
    });
    this.http.post('http://localhost:8000/submitForm',this.formData).subscribe(response=>{
      console.log('Form successfully submit',response);
    })
    this.currentStep = 1;

    this.formData = {
      name: '',
      email: '',
      phone: '',
      doctor: '',
      date: '',
      time: '',
      age:'',
      gender:'',
      disease:'',
      govtId:'',
    };
  }

  uploadedFileName: string = '';

handleFileInput(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.uploadedFileName = file.name;
    this.formData.govtId = file ; 
  }
}



}
