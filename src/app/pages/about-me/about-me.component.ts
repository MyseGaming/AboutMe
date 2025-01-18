import { Component } from '@angular/core';
import {HeaderComponent} from '../components/header/header.component';
import {PageContentComponent} from '../components/page-content/page-content.component';

@Component({
  selector: 'app-about-me',
  imports: [
    HeaderComponent,
    PageContentComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.less'
})
export class AboutMeComponent {

}
