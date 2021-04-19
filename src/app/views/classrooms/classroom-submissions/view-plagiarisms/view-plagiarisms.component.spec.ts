import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlagiarismsComponent } from './view-plagiarisms.component';

describe('ViewPlagiarismsComponent', () => {
  let component: ViewPlagiarismsComponent;
  let fixture: ComponentFixture<ViewPlagiarismsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlagiarismsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlagiarismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
