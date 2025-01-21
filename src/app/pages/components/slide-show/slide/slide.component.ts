import {Component, HostBinding} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-slide',
  imports: [],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.less'
})
export class SlideComponent {

  @HostBinding('class.hidden') public isHidden: boolean = true;

  public displayed$: Observable<boolean> = of(false);

  public subscribeToDisplay(display$: Observable<boolean>) {
    this.displayed$ = display$;
    this.displayed$.subscribe(displayed => {
      this.isHidden = !displayed;
    })
  }
}
