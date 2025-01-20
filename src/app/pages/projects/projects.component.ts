import {ChangeDetectorRef, Component, TemplateRef, ViewChild} from '@angular/core';
import {HeaderComponent} from '../components/header/header.component';
import {ParallaxScrollPageComponent} from '../components/parallax-scroll-page/parallax-scroll-page.component';
import {ParallaxData} from '../components/parallax-scroll-page/parallax-data';
import {CommonModule} from '@angular/common';
import {HorizontalPagesComponent} from '../components/horizontal-pages/horizontal-pages.component';
import {HorizontalPageComponent} from '../components/horizontal-pages/horizontal-page/horizontal-page.component';

@Component({
  selector: 'app-projects',
  imports: [
    HeaderComponent,
    ParallaxScrollPageComponent,
    CommonModule,
    HorizontalPagesComponent,
    HorizontalPageComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less'
})
export class ProjectsComponent {
  @ViewChild('intro') templateIntro!: TemplateRef<any>;
  @ViewChild('content') templateContent!: TemplateRef<any>;

  constructor(
    private cd: ChangeDetectorRef) {
  }

  parallaxPageData: ParallaxData[] = [
    {
      imageUrl: 'assets/Images/pexels-pixabay-355952.jpg',
      textColor: 'white',
      blurImage: false,
      template: null, // Platzhalter
    },
    {
      imageUrl: 'assets/Images/pexels-diva-plavalaguna-6147357.jpg',
      textColor: 'black',
      blurImage: true,
      template: null, // Platzhalter
    },
  ];

  ngAfterViewInit() {
    this.parallaxPageData[0].template = this.templateIntro;
    this.parallaxPageData[1].template = this.templateContent;

    this.cd.detectChanges();
  }

}
