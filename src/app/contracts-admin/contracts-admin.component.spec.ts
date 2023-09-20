import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsAdminComponent } from './contracts-admin.component';

describe('ContractsAdminComponent', () => {
  let component: ContractsAdminComponent;
  let fixture: ComponentFixture<ContractsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractsAdminComponent]
    });
    fixture = TestBed.createComponent(ContractsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
