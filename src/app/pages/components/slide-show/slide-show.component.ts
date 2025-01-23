import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {SlideComponent} from './slide/slide.component';
import {CommonModule} from '@angular/common';
import {BehaviorSubject, mergeMap, of} from 'rxjs';

@Component({
  selector: 'app-slide-show',
  imports: [
    CommonModule
  ],
  templateUrl: './slide-show.component.html',
  styleUrl: './slide-show.component.less'
})
export class SlideShowComponent implements AfterContentInit {
  currentPage$: BehaviorSubject<number>;
  currentPage: number = 0;

  @ContentChildren(SlideComponent)
  slides!: QueryList<SlideComponent>;

  constructor() {
    this.currentPage$ = new BehaviorSubject(this.currentPage); // Standardmäßig erste Seite anzeigen
  }

  ngAfterContentInit() {
    this.slides.toArray().forEach((page: SlideComponent, index: number) => {
      page.pageIndex = index;
      page.currentPage = index === this.currentPage;
      page.shrinkLeft = index === this.currentPage + 1;
      page.subscribeToDisplay(
        this.currentPage$.pipe(mergeMap(currentPage => {
          console.log('' + index + ': ' + Math.abs(index - currentPage));
          return of(Math.abs(index - currentPage) <= 1)
        }))
      );
    });
    this.currentPage$.next(this.currentPage);
  }

  showPage(index: number) {
    const slides = this.slides.toArray();

    if (index < this.currentPage) {
      // Show Lefthand Slide
      slides[index].slideRight(true)
      slides[this.currentPage].slideRight(false);
    }

    if (index > this.currentPage) {
      // Show Righthand slide
      slides[index].slideLeft(true);
      slides[this.currentPage].slideLeft(false);
    }

    this.currentPage = index;
    this.currentPage$.next(this.currentPage);
  }
}
