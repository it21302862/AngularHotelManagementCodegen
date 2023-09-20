import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDisplayAdminComponent } from './hotel-display-admin.component';

describe('HotelDisplayAdminComponent', () => {
  let component: HotelDisplayAdminComponent;
  let fixture: ComponentFixture<HotelDisplayAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelDisplayAdminComponent]
    });
    fixture = TestBed.createComponent(HotelDisplayAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
