import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OzarkComponent } from './ozark.component';

describe('OzarkComponent', () => {
  let component: OzarkComponent;
  let fixture: ComponentFixture<OzarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OzarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OzarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
