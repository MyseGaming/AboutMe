import { Component } from '@angular/core';
import {LinklistComponent} from './linklist/linklist.component';

@Component({
  selector: 'app-header',
  imports: [
    LinklistComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {

}
