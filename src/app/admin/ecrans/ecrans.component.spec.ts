import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcransComponent } from './ecrans.component';

describe('EcransComponent', () => {
  let component: EcransComponent;
  let fixture: ComponentFixture<EcransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
