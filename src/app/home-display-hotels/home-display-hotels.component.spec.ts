import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDisplayHotelsComponent } from './home-display-hotels.component';

describe('HomeDisplayHotelsComponent', () => {
  let component: HomeDisplayHotelsComponent;
  let fixture: ComponentFixture<HomeDisplayHotelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeDisplayHotelsComponent]
    });
    fixture = TestBed.createComponent(HomeDisplayHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
