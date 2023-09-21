import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPricesDisplayAdminComponent } from './room-prices-display-admin.component';

describe('RoomPricesDisplayAdminComponent', () => {
  let component: RoomPricesDisplayAdminComponent;
  let fixture: ComponentFixture<RoomPricesDisplayAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomPricesDisplayAdminComponent]
    });
    fixture = TestBed.createComponent(RoomPricesDisplayAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
