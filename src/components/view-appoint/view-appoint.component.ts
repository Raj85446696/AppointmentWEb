import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-view-appoint',
  imports: [CommonModule,NavbarComponent],
  templateUrl: './view-appoint.component.html',
  styleUrl: './view-appoint.component.css'
})
export class ViewAppointComponent {
  Role:String = "Doctor"; //Doctor , Patient
}
