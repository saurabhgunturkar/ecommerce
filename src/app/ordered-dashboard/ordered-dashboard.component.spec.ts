import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedDashboardComponent } from './ordered-dashboard.component';

describe('OrderedDashboardComponent', () => {
  let component: OrderedDashboardComponent;
  let fixture: ComponentFixture<OrderedDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderedDashboardComponent]
    });
    fixture = TestBed.createComponent(OrderedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
