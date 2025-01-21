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
  $currentPage: BehaviorSubject<number>;

  @ContentChildren(SlideComponent)
  slides!: QueryList<SlideComponent>;

  constructor() {
    this.$currentPage = new BehaviorSubject(0); // Standardmäßig erste Seite anzeigen
  }

  ngAfterContentInit() {
    this.slides.toArray().forEach((page: SlideComponent, index: number) => {
      page.subscribeToDisplay(
        this.$currentPage.pipe(mergeMap(currentPage => of(currentPage === index)))
      );
    });
    this.$currentPage.next(0);
  }

  showPage(index: number) {
    this.$currentPage.next(index);
  }
}
