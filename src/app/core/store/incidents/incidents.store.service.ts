import { Injectable } from '@angular/core';
import { Incident } from '@core/models/incident';
import { Store } from '@core/services/helpers/store/store.service';

@Injectable({
  providedIn: 'root'
})
export class IncidentsStore extends Store<Incident[]>{

  constructor() {
    super([]);
  }
}
