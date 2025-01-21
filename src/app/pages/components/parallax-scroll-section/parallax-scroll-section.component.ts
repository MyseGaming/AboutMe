import {Component, Input} from '@angular/core';
import {ParallaxData} from './parallax-data';
import {NgClass, NgIf, NgStyle} from '@angular/common'

@Component({
  selector: 'app-parallax-scroll-section',
  imports: [
    NgStyle,
    NgClass,
    NgIf
  ],
  templateUrl: './parallax-scroll-section.component.html',
  styleUrl: './parallax-scroll-section.component.less'
})
export class ParallaxScrollSectionComponent {
  @Input()
  public data!: ParallaxData;
}
