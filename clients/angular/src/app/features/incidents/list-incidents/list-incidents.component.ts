import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Incident } from '@core/models/incident';
import { IncidentsStore } from '@core/store/incidents/incidents.store.service';
import { skip, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'ta9-list-incidents',
  templateUrl: './list-incidents.component.html',
  styleUrls: ['./list-incidents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListIncidentsComponent implements OnInit, OnDestroy {
  incidentsList: Incident[];

  filteredList: Incident[];

  queryText: string;

  isListView: boolean;

  isRightSideBarOpen: boolean;

  private readonly destroy$: Subject<void>;

  constructor(
    private incidentsStore: IncidentsStore,

    private cdRef: ChangeDetectorRef
  ) {
    this.incidentsList = [];
    this.filteredList = [];
    this.queryText = '';
    this.isListView = true;
    this.isRightSideBarOpen = false;
    this.destroy$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.incidentsStore
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.incidentsList = data;
        this.filteredList = data;
        this.cdRef.markForCheck();
      });

    // listen changes on the store state.
    this.incidentsStore.$.pipe(
      skip(2), // skip the first initial value and the fetch
      takeUntil(this.destroy$)
    ).subscribe((data) => {
      this.incidentsList = data;
      this.onSearchTextChanged(this.queryText);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchTextChanged(name: string) {
    const nameLowerCase = name.toLowerCase();
    this.filteredList = this.incidentsList.filter((item) =>
      item.name.includes(nameLowerCase)
    );
    this.cdRef.markForCheck();
  }

  toggleViewMode(value: boolean) {
    if (this.isListView !== value) {
      this.isListView = value;
      this.cdRef.markForCheck();
    }
  }

  openRightSidebar() {
    this.isRightSideBarOpen = true;
    this.cdRef.markForCheck();
  }

  onSideBarClosed() {
    this.isRightSideBarOpen = false;
  }

  trackByFn(index: number, item: Incident) {
    return item.id;
  }
}
