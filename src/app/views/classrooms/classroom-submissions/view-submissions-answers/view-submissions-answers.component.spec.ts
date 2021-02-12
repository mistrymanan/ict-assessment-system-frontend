import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubmissionsAnswersComponent } from './view-submissions-answers.component';

describe('ViewSubmissionsAnswersComponent', () => {
  let component: ViewSubmissionsAnswersComponent;
  let fixture: ComponentFixture<ViewSubmissionsAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubmissionsAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubmissionsAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
