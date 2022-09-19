import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewColorComponent } from './overview-color.component';

describe('OverviewColorComponent', () => {
  let component: OverviewColorComponent;
  let fixture: ComponentFixture<OverviewColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
