import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewSubmissionsAnswersComponent } from './admin-view-submissions-answers.component';

describe('AdminViewSubmissionsAnswersComponent', () => {
  let component: AdminViewSubmissionsAnswersComponent;
  let fixture: ComponentFixture<AdminViewSubmissionsAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewSubmissionsAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewSubmissionsAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
