import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinklistComponent } from './linklist.component';

describe('LinklistComponent', () => {
  let component: LinklistComponent;
  let fixture: ComponentFixture<LinklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
