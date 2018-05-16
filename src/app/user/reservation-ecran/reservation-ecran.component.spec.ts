import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationEcranComponent } from './reservation-ecran.component';

describe('ReservationEcranComponent', () => {
  let component: ReservationEcranComponent;
  let fixture: ComponentFixture<ReservationEcranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationEcranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationEcranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
