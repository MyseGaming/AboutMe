import {Component, Input} from '@angular/core';
import {ParallaxData} from './parallax-data';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-parallax-scroll-page',
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './parallax-scroll-page.component.html',
  styleUrl: './parallax-scroll-page.component.less'
})
export class ParallaxScrollPageComponent {
  @Input()
  public data!: ParallaxData;
}
