import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcominglaunchDetailsComponent } from './upcominglaunch-details.component';

describe('UpcominglaunchDetailsComponent', () => {
  let component: UpcominglaunchDetailsComponent;
  let fixture: ComponentFixture<UpcominglaunchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcominglaunchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcominglaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
