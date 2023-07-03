import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleaComponent } from './flea.component';

describe('FleaComponent', () => {
  let component: FleaComponent;
  let fixture: ComponentFixture<FleaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
