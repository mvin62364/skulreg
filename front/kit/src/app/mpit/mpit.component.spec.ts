import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpitComponent } from './mpit.component';

describe('MpitComponent', () => {
  let component: MpitComponent;
  let fixture: ComponentFixture<MpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
