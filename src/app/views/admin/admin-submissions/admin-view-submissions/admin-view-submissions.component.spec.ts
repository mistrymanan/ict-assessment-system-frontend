import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewSubmissionsComponent } from './admin-view-submissions.component';

describe('AdminViewSubmissionsComponent', () => {
  let component: AdminViewSubmissionsComponent;
  let fixture: ComponentFixture<AdminViewSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewSubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
