import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fireflies } from './fireflies';

describe('Fireflies', () => {
  let component: Fireflies;
  let fixture: ComponentFixture<Fireflies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fireflies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fireflies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
