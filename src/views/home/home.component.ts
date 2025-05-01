import { Component } from '@angular/core';
import { MainComponent } from '../../components/main/main.component';
import { ContainerComponent } from '../../components/container/container.component';
import { AboutComponent } from '../../components/about/about.component';
import { FacilityComponent } from '../../components/facility/facility.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { FootorComponent } from '../../components/footor/footor.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  imports: [MainComponent,ContainerComponent,AboutComponent,FacilityComponent,FaqComponent,FootorComponent,TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
