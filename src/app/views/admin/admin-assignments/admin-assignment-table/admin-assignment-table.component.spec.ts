import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignmentTableComponent } from './admin-assignment-table.component';

describe('AdminAssignmentTableComponent', () => {
  let component: AdminAssignmentTableComponent;
  let fixture: ComponentFixture<AdminAssignmentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssignmentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssignmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
