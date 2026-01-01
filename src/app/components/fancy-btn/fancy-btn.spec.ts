import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyBtn } from './fancy-btn';

describe('FancyBtn', () => {
  let component: FancyBtn;
  let fixture: ComponentFixture<FancyBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FancyBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FancyBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
