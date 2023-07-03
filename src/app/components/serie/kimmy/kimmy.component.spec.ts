import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KimmyComponent } from './kimmy.component';

describe('KimmyComponent', () => {
  let component: KimmyComponent;
  let fixture: ComponentFixture<KimmyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KimmyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KimmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
