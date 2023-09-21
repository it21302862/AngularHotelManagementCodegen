import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypeDisplayAdminComponent } from './room-type-display-admin.component';

describe('RoomTypeDisplayAdminComponent', () => {
  let component: RoomTypeDisplayAdminComponent;
  let fixture: ComponentFixture<RoomTypeDisplayAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomTypeDisplayAdminComponent]
    });
    fixture = TestBed.createComponent(RoomTypeDisplayAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
