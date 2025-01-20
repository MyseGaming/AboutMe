import {Component, ContentChildren, QueryList} from '@angular/core';
import {HorizontalPageComponent} from './horizontal-page/horizontal-page.component';
import {CommonModule} from '@angular/common';
import {BehaviorSubject, of} from 'rxjs';

@Component({
  selector: 'app-horizontal-pages',
  imports: [
    CommonModule
  ],
  templateUrl: './horizontal-pages.component.html',
  styleUrl: './horizontal-pages.component.less'
})
export class HorizontalPagesComponent {
  constructor() {
    this.$currentPage = new BehaviorSubject(0);
  }

  @ContentChildren(HorizontalPageComponent) pages!: QueryList<HorizontalPageComponent>;
  pageCount: number = 0;

  ngAfterContentInit() {
    this.$currentPage.subscribe(currentPage => {
      this.pages.toArray().forEach((page: HorizontalPageComponent, index: number) => {
        page.$displayed = of(currentPage === index);
      })
    })
  }

  $currentPage: BehaviorSubject<number>; // Standardmäßig erste Seite anzeigen

  showPage(index: number) {
    this.$currentPage.next(index);
  }
}
