import {Component, HostBinding} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-slide',
  imports: [],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.less'
})
export class SlideComponent {
  @HostBinding("style.--page-index") public pageIndex: number = 0;
  @HostBinding('class.displayed') public displayed: boolean = true;
  @HostBinding('class.grow-left') public growLeft: boolean = false;
  @HostBinding('class.grow-right') public growRight: boolean = false;
  @HostBinding('class.shrink-left') public shrinkLeft: boolean = false;
  @HostBinding('class.shrink-right') public shrinkRight: boolean = false;
  @HostBinding('class.current-page') public currentPage: boolean = false;


  public displayed$: Observable<boolean> = of(false);

  public subscribeToDisplay(display$: Observable<boolean>) {
    this.displayed$ = display$;
    this.displayed$.subscribe(displayed => {
      this.displayed = displayed;
    })
  }

  public slideLeft(slideIn: boolean) {
    if (slideIn) {
      this.growRight = true;
      this.currentPage = true;

      this.shrinkRight = false;
      this.shrinkLeft = false;
      this.growLeft = false;
    } else {
      this.shrinkLeft = true;

      this.currentPage = false;
      this.growLeft = false;
      this.growRight = false;
      this.shrinkRight = false;
    }
  }

  public slideRight(slideIn: boolean) {
    if (slideIn) {
      this.growLeft = true;
      this.currentPage = true;

      this.shrinkLeft = false;
      this.shrinkRight = false;
      this.growRight = false;
    } else {
      this.shrinkRight = true;

      this.currentPage = false;
      this.growLeft = false;
      this.growRight = false;
      this.shrinkLeft = false;
    }
  }
}
