import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxScrollPageComponent } from './parallax-scroll-page.component';

describe('ParallaxScrollPageComponent', () => {
  let component: ParallaxScrollPageComponent;
  let fixture: ComponentFixture<ParallaxScrollPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallaxScrollPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallaxScrollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
