import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeropryComponent } from './meropry.component';

describe('MeropryComponent', () => {
  let component: MeropryComponent;
  let fixture: ComponentFixture<MeropryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeropryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeropryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
