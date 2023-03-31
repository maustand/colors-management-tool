import { Injectable } from '@angular/core';
import { Incident } from '@core/models/incident';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { v4 as uuidv4 } from 'uuid';

/**
 * Emulates CRUD operations over a REST API and creates the initial fake data for the platform.
 * for more info:
 * https://angular.io/tutorial/toh-pt6
 * https://github.com/angular/angular/tree/main/packages/misc/angular-in-memory-web-api
 */

@Injectable({
  providedIn: 'root',
})
export class InMemoryFakeDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const today = new Date();

    const incidents: Incident[] = [
      {
        id: '1',
        name: 'torando',
        color: 'blue',
        description: 'tornado in chicago',
        createdBy: 'Mauricio',
        createdAt: this.subtractDate(today, 3).toISOString(),
      },
      {
        id: '3',
        name: 'car incident',
        color: 'green',
        description: 'crash on ayalon street',
        createdBy: 'Mauricio',
        createdAt: this.subtractDate(today, 10).toISOString(),
        updatedAt: this.subtractDate(today, this.getRandomInt(8)).toISOString(),
      },
      {
        id: '4',
        name: 'human trafficking',
        color: 'pink',
        description: 'Japanese human trafficking',
        createdBy: 'Mauricio',
        createdAt: this.subtractDate(
          today,
          this.getRandomInt(20)
        ).toISOString(),
      },

      {
        id: '5',
        name: 'terrorist attack',
        color: 'yellow',
        createdBy: 'Mauricio',
        createdAt: this.subtractDate(
          today,
          this.getRandomInt(100)
        ).toISOString(),
      },

      {
        id: '6',
        name: 'murder',
        color: 'gray',
        description: 'killed on the beach',
        createdBy: 'Mauricio',
        createdAt: this.subtractDate(today, 68).toISOString(),
        updatedAt: this.subtractDate(today, 20).toISOString(),
      },
      {
        id: '1654',
        name: 'murder on dallas',
        color: 'brown',
        description: 'mass shooting',
        createdBy: 'Mauricio',
        createdAt: this.subtractDate(today, 32).toISOString(),
      },
    ];
    return { incidents };
  }

  genId(incidents: Incident[]): string {
    return incidents.length > 0 ? uuidv4() : uuidv4() + 1
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  private subtractDate(date: Date, daysToSubtract: number): Date {
    date.setDate(date.getDate() - daysToSubtract);
    return date;
  }
}
