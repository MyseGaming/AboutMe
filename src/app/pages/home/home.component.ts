import {Component} from '@angular/core';
import {SlideComponent} from "../components/slide-show/slide/slide.component";
import {SlideShowComponent} from "../components/slide-show/slide-show.component";
import {ParallaxScrollSectionComponent} from "../components/parallax-scroll-section/parallax-scroll-section.component";
import {ParallaxData} from '../components/parallax-scroll-section/parallax-data';
import {CurriculumVitaeComponent} from '../components/curriculum-vitae/curriculum-vitae.component';
import {CVEntryComponent} from '../components/curriculum-vitae/cventry/cventry.component';
import {NgForOf} from '@angular/common';
import {CVData} from '../../constants/CVData';
import {IconsLarge} from '../../enums/iconsLarge';
import {ProjectsData} from '../../constants/ProjectsData';

@Component({
  selector: 'app-home',
  imports: [
    SlideComponent,
    SlideShowComponent,
    ParallaxScrollSectionComponent,
    CurriculumVitaeComponent,
    CVEntryComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
  personData: ParallaxData = {
    imageUrl: 'assets/images/MACIO_Kiel_3060.jpg',
    textColor: '',
    blurImage: false,
  }

  solutionData: ParallaxData = {
    imageUrl: 'assets/images/pexels-diva-plavalaguna-6147357.jpg',
    textColor: '',
    blurImage: true
  }

  standardData: ParallaxData = {
    textColor: '',
  }

  public readonly cvEntries = CVData;
  public readonly projects = ProjectsData;

  protected readonly Icons = IconsLarge;
}
