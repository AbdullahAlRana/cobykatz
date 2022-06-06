import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineOverviewComponent } from './timeline-overview.component';

describe('TimelineOverviewComponent', () => {
  let component: TimelineOverviewComponent;
  let fixture: ComponentFixture<TimelineOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
