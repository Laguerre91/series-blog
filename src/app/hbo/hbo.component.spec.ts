import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HboComponent } from './hbo.component';

describe('HboComponent', () => {
  let component: HboComponent;
  let fixture: ComponentFixture<HboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
