import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HenryComponent } from './henry.component';

describe('HenryComponent', () => {
  let component: HenryComponent;
  let fixture: ComponentFixture<HenryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HenryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HenryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
