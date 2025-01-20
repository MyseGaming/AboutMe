import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalPagesComponent } from './horizontal-pages.component';

describe('HorizontalPagesComponent', () => {
  let component: HorizontalPagesComponent;
  let fixture: ComponentFixture<HorizontalPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
