import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incident } from '@core/models/incident';
import { environment } from '@env';
import { map, Observable, throwError } from 'rxjs';

/**
 * Simulates a real request to server entrypoint /incidents
 */

@Injectable({
  providedIn: 'root',
})
export class IncidentsService {
  private readonly entryPoint: string;

  constructor(private http: HttpClient) {
    this.entryPoint = `${environment.serverURI}/incidents`;
  }

  all(): Observable<Incident[]> {
    return this.http.get<Incident[]>(`${this.entryPoint}`);
  }

  show(id: string): Observable<Incident> {
    return this.http.get<Incident>(`${this.entryPoint}/${id}`);
  }
}
