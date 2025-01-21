import { Component } from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";
import {SlideComponent} from "../components/slide-show/slide/slide.component";
import {SlideShowComponent} from "../components/slide-show/slide-show.component";
import {ParallaxScrollSectionComponent} from "../components/parallax-scroll-section/parallax-scroll-section.component";
import {ParallaxData} from '../components/parallax-scroll-section/parallax-data';

@Component({
  selector: 'app-home',
    imports: [
        HeaderComponent,
        SlideComponent,
        SlideShowComponent,
        ParallaxScrollSectionComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
  personData: ParallaxData = {
    imageUrl: 'assets/Images/MACIO_Kiel_3060.jpg',
    textColor: 'black',
    blurImage: false,
  }

  solutionData: ParallaxData = {
    imageUrl: 'assets/Images/pexels-diva-plavalaguna-6147357.jpg',
    textColor: 'black',
    blurImage: true
  }

  standardData: ParallaxData = {
    textColor: '',
  }
}
