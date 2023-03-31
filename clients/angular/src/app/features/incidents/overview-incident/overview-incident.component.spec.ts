import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewIncidentComponent } from './overview-incident.component';

describe('OverviewIncidentComponent', () => {
  let component: OverviewIncidentComponent;
  let fixture: ComponentFixture<OverviewIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewIncidentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
