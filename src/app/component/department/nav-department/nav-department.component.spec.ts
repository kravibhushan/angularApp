import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDepartmentComponent } from './nav-department.component';

describe('NavDepartmentComponent', () => {
  let component: NavDepartmentComponent;
  let fixture: ComponentFixture<NavDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
