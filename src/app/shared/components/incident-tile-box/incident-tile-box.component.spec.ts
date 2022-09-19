import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentTileBoxComponent } from './incident-tile-box.component';

describe('TileBoxComponent', () => {
  let component: IncidentTileBoxComponent;
  let fixture: ComponentFixture<IncidentTileBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentTileBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentTileBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
