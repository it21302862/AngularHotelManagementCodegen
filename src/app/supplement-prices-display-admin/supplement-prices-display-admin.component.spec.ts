import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementPricesDisplayAdminComponent } from './supplement-prices-display-admin.component';

describe('SupplementPricesDisplayAdminComponent', () => {
  let component: SupplementPricesDisplayAdminComponent;
  let fixture: ComponentFixture<SupplementPricesDisplayAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplementPricesDisplayAdminComponent]
    });
    fixture = TestBed.createComponent(SupplementPricesDisplayAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
