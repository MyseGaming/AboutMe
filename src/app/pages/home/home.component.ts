import { Component } from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";
import {PageContentComponent} from '../components/page-content/page-content.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    PageContentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
