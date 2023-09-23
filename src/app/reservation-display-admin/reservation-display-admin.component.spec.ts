import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDisplayAdminComponent } from './reservation-display-admin.component';

describe('ReservationDisplayAdminComponent', () => {
  let component: ReservationDisplayAdminComponent;
  let fixture: ComponentFixture<ReservationDisplayAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationDisplayAdminComponent]
    });
    fixture = TestBed.createComponent(ReservationDisplayAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
