import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-appoint',
  imports: [CommonModule],
  templateUrl: './view-appoint.component.html',
  styleUrl: './view-appoint.component.css'
})
export class ViewAppointComponent {
  Role:String = "Patient"; //Doctor , Patient
}
