import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalPageComponent } from './horizontal-page.component';

describe('HorizontalPageComponent', () => {
  let component: HorizontalPageComponent;
  let fixture: ComponentFixture<HorizontalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
