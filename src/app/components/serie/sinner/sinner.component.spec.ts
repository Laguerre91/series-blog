import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinnerComponent } from './sinner.component';

describe('SinnerComponent', () => {
  let component: SinnerComponent;
  let fixture: ComponentFixture<SinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
