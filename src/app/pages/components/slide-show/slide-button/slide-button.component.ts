import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-slide-button',
  imports: [
    NgIf
  ],
  templateUrl: './slide-button.component.html',
  styleUrl: './slide-button.component.less'
})
export class SlideButtonComponent implements OnInit {
  @Input() @HostBinding('class.active')
  public active = false;
  @Input() @HostBinding('class.first')
  public first = false;
  @Input() @HostBinding('class.last')
  public last = false;

  ngOnInit(): void {
    if (this.first) {
      this.active = true;
    }
  }
}
