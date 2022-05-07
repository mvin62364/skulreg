import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcabComponent } from './lcab.component';

describe('LcabComponent', () => {
  let component: LcabComponent;
  let fixture: ComponentFixture<LcabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LcabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
