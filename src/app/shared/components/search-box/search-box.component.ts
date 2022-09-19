import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'ta9-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  @Input() placeholder?: string;

  @Output() searchTextChanged = new EventEmitter<string>();

  searchBoxForm = new FormGroup({
    searchText: new FormControl<string>(''),
  });

  private readonly destroy$ = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    this.searchBoxForm.valueChanges
      .pipe(
        debounceTime(500),
        filter(() => this.searchBoxForm.valid),
        takeUntil(this.destroy$)
      )
      .subscribe((value) => {
        this.searchTextChanged.emit(value.searchText as string);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
