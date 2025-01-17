import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: HomeComponent },
  { path: 'job-experience', component: HomeComponent },
  { path: 'projects', component: HomeComponent },
  { path: '**', component: HomeComponent }
];
