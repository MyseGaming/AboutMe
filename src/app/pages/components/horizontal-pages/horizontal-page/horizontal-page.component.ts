import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-horizontal-page',
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './horizontal-page.component.html',
  styleUrl: './horizontal-page.component.less'
})
export class HorizontalPageComponent {
  @Input()
  public $displayed: Observable<boolean> = new Observable<boolean>();

  constructor() {
    this.$displayed.subscribe(displayed => {
      console.log(displayed);
    })
  }
}
