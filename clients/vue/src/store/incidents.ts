import { Incident } from '../interfaces/incident';
import { defineStore } from 'pinia';

interface IncidentState {
  incidents: Incident[];
  incidentOnOverview: Incident | null;
}

export const useIncidentStore = defineStore('incidents', {
  state: (): IncidentState => {
    return {
      incidents: [] as Incident[],
      incidentOnOverview: null,
    };
  },
  actions: {
    async all() {
      const fakeDate: Incident[] = [
        {
          id: '64299e6e63c00e671509e020',
          name: 'life is hard',
          createdBy: 'Mauricio',
          createdAt: '2023-04-01T21:00:00.000Z',
        },
        {
          id: '6429a626bb85cd375d6f2e99',
          name: 'test how it works',
          createdBy: 'Mauricio',
          createdAt: '2023-04-01T21:00:00.000Z',
        },
      ];

      this.incidents = fakeDate;
      return fakeDate;
    },
    async show(incidentId: string): Promise<Incident | undefined> {
      return this.incidents.find(x => x.id === incidentId);
    },
  },
});
