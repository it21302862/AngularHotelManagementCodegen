import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementDisplayAdminComponent } from './supplement-display-admin.component';

describe('SupplementDisplayAdminComponent', () => {
  let component: SupplementDisplayAdminComponent;
  let fixture: ComponentFixture<SupplementDisplayAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplementDisplayAdminComponent]
    });
    fixture = TestBed.createComponent(SupplementDisplayAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
