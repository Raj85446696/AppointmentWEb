import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { ContainerComponent } from '../container/container.component';
import { AboutComponent } from '../about/about.component';
import { FacilityComponent } from '../facility/facility.component';
import { FaqComponent } from '../faq/faq.component';
import { FootorComponent } from '../footor/footor.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  imports: [MainComponent,ContainerComponent,AboutComponent,FacilityComponent,FaqComponent,FootorComponent,TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
