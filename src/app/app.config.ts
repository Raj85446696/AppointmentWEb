import { ApplicationConfig, Component, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppointFormComponent } from '../components/appoint-form/appoint-form.component';
import { HomeComponent } from '../components/home/home.component';
import { ViewAppointComponent } from '../components/view-appoint/view-appoint.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';

export const routes = [
  {path:'',component:HomeComponent},
  {path:'appoint-form',component:AppointFormComponent},
  {path:'view-form',component:ViewAppointComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}

]

export const appConfig = {
  providers: [provideRouter(routes)]
};
