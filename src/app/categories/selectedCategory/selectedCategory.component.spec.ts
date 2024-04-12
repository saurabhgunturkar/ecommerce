import { ComponentFixture, TestBed } from '@angular/core/testing';

import { selectCategoryComponent } from './selectedCategory.component';

describe('selectCategoryComponent', () => {
  let component: selectCategoryComponent;
  let fixture: ComponentFixture<selectCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [selectCategoryComponent] 
    });
    fixture = TestBed.createComponent(selectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
