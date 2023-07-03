import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleliesComponent } from './littlelies.component';

describe('LittleliesComponent', () => {
  let component: LittleliesComponent;
  let fixture: ComponentFixture<LittleliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LittleliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
