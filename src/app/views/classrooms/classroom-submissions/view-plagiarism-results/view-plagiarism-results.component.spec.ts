import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlagiarismResultsComponent } from './view-plagiarism-results.component';

describe('ViewPlagiarismResultsComponent', () => {
  let component: ViewPlagiarismResultsComponent;
  let fixture: ComponentFixture<ViewPlagiarismResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlagiarismResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlagiarismResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
