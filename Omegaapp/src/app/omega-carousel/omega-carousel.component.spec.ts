import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmegaCarouselComponent } from './omega-carousel.component';

describe('OmegaCarouselComponent', () => {
  let component: OmegaCarouselComponent;
  let fixture: ComponentFixture<OmegaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmegaCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OmegaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
