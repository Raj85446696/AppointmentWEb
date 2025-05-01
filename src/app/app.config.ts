import { ApplicationConfig, Component, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppointFormComponent } from '../components/appoint-form/appoint-form.component';
import { HomeComponent } from '../views/home/home.component';

export const routes = [
  {path:'',component:HomeComponent},
  {path:'appoint-form',component:AppointFormComponent}
]

export const appConfig = {
  providers: [provideRouter(routes)]
};
