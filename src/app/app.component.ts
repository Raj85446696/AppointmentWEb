import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MainComponent } from '../components/main/main.component';
import { AboutComponent } from '../components/about/about.component';
import { ContainerComponent } from '../components/container/container.component';
import { FacilityComponent } from '../components/facility/facility.component';
import { FaqComponent } from '../components/faq/faq.component';
import { FootorComponent } from '../components/footor/footor.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,MainComponent,ContainerComponent,AboutComponent,FacilityComponent,FaqComponent,FootorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
