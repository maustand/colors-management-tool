import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Incident } from '@core/models/incident';
import { IncidentsStore } from '@core/store/incidents/incidents.store.service';
import { catchError, Observable, throwError } from 'rxjs';

@Component({
  selector: 'ta9-overview-incident',
  templateUrl: './overview-incident.component.html',
  styleUrls: ['./overview-incident.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewIncidentComponent implements OnInit {
  myIncident$?: Observable<Incident>;

  IsNot404: boolean;

  constructor(
    private incidentsStore: IncidentsStore,
    private route: ActivatedRoute
  ) {
    this.IsNot404 = false;
  }

  ngOnInit(): void {
    const incidentId: string = this.route.snapshot.params['id'] || '';
    this.myIncident$ = this.incidentsStore
      .findById(incidentId)
      .pipe(
        catchError((err) => {
          if (err.status === 404) {
            this.IsNot404 = true;
          }
          return throwError(() => new Error('a general exception has happend'));
        })
      );
  }
}
