import { Injectable } from '@angular/core';
import { Incident } from '@core/models/incident';
import { IncidentsService } from '@core/services/api/incidents/incidents.service';
import { Store } from '@core/services/helpers/store/store.service';
import { Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IncidentsStore extends Store<Incident[]> {
  constructor(private incidentsServ: IncidentsService) {
    super([]);
  }

  getAll() {
    return this.state.length > 0
      ? of(this.state)
      : this.incidentsServ.all().pipe(
          tap((data) => {
            this.setState(data);
          })
        );
  }

  create(item: Incident) {
    return this.incidentsServ.create(item).subscribe((newIncident) => {
      this.setState([...this.state, newIncident]);
    });
  }

  findById(incidentId: string): Observable<Incident> {
    return this.select((list) => list.find((i) => i.id === incidentId)).pipe(
      switchMap((stream) => {
        return (stream?.id)
          ? of(stream)
          : this.incidentsServ.show(incidentId);
      })
    );
  }
}
