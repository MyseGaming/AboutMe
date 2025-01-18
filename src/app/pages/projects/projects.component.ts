import { Component } from '@angular/core';
import {HeaderComponent} from '../components/header/header.component';
import {ParallaxScrollPageComponent} from '../components/parallax-scroll-page/parallax-scroll-page.component';

@Component({
  selector: 'app-projects',
  imports: [
    HeaderComponent,
    ParallaxScrollPageComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less'
})
export class ProjectsComponent {

}
