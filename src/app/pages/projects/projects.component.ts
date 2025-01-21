import {Component} from '@angular/core';
import {HeaderComponent} from '../components/header/header.component';
import {ParallaxData} from '../components/parallax-scroll-section/parallax-data';
import {CommonModule} from '@angular/common';
import {SlideShowComponent} from '../components/slide-show/slide-show.component';
import {ParallaxScrollSectionComponent} from '../components/parallax-scroll-section/parallax-scroll-section.component';
import {SlideComponent} from '../components/slide-show/slide/slide.component';

@Component({
  selector: 'app-projects',
  imports: [
    HeaderComponent,
    CommonModule,
    SlideShowComponent,
    ParallaxScrollSectionComponent,
    SlideComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less'
})
export class ProjectsComponent {
  personData: ParallaxData = {
    imageUrl: 'assets/Images/pexels-pixabay-355952.jpg',
    textColor: 'white',
    blurImage: true
  }

  solutionData: ParallaxData = {
    imageUrl: 'assets/Images/pexels-diva-plavalaguna-6147357.jpg',
    textColor: 'black',
    blurImage: true
  }

  standardData: ParallaxData = {
    textColor: 'white',
  }

  parallaxPageData: ParallaxData[] = [
    {
      textColor: 'white',
      blurImage: false
    },
    {
      imageUrl: 'assets/Images/pexels-diva-plavalaguna-6147357.jpg',
      textColor: 'black',
      blurImage: true
    },
  ];

}
