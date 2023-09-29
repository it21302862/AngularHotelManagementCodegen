import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountDisplayAdminComponent } from './discount-display-admin.component';

describe('DiscountDisplayAdminComponent', () => {
  let component: DiscountDisplayAdminComponent;
  let fixture: ComponentFixture<DiscountDisplayAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountDisplayAdminComponent]
    });
    fixture = TestBed.createComponent(DiscountDisplayAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
