import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxScrollSectionComponent } from './parallax-scroll-section.component';

describe('ParallaxScrollPageComponent', () => {
  let component: ParallaxScrollSectionComponent;
  let fixture: ComponentFixture<ParallaxScrollSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallaxScrollSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallaxScrollSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
