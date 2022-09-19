import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Incident } from '@core/models/incident';
import { IncidentsService } from '@core/services/api/incidents/incidents.service';

@Component({
  selector: 'ta9-list-incidents',
  templateUrl: './list-incidents.component.html',
  styleUrls: ['./list-incidents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListIncidentsComponent implements OnInit {
  incidentsList: Incident[];
  
  filteredList: Incident[];
  
  queryText: string;

  isListView: boolean;

  constructor(
    private incidentsServ: IncidentsService,
    private cdRef: ChangeDetectorRef
  ) {
    this.incidentsList = [];
    this.filteredList = [];
    this.queryText = '';
    this.isListView = true;
  }

  ngOnInit(): void {
    this.incidentsServ.all().subscribe((data) => {
      this.incidentsList = data;
      this.filteredList =  data;
      this.cdRef.markForCheck();
    });
  }

  onSearchTextChanged(name: string) {
    const nameLowerCase = name.toLowerCase();
    this.filteredList = this.incidentsList.filter((item) => item.name.includes(nameLowerCase));
    this.cdRef.markForCheck();
  }

  toggleViewMode() {
    this.isListView = !this.isListView;
    this.cdRef.markForCheck();   
  }

  trackByFn(index: number, item: Incident) {
    return item.id;
  }
}
