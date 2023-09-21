import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonDisplayAdminComponent } from './season-display-admin.component';

describe('SeasonDisplayAdminComponent', () => {
  let component: SeasonDisplayAdminComponent;
  let fixture: ComponentFixture<SeasonDisplayAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonDisplayAdminComponent]
    });
    fixture = TestBed.createComponent(SeasonDisplayAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
