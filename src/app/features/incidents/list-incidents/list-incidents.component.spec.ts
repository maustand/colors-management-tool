import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIncidentsComponent } from './list-incidents.component';

describe('ListIncidentsComponent', () => {
  let component: ListIncidentsComponent;
  let fixture: ComponentFixture<ListIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListIncidentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
