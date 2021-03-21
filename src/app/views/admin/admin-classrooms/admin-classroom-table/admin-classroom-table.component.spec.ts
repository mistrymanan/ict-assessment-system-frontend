import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassroomTableComponent } from './admin-classroom-table.component';

describe('AdminClassroomTableComponent', () => {
  let component: AdminClassroomTableComponent;
  let fixture: ComponentFixture<AdminClassroomTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClassroomTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassroomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
