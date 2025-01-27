import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutMeComponent} from './pages/about-me/about-me.component';
import {ProjectsComponent} from './pages/projects/projects.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'job-experience', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
