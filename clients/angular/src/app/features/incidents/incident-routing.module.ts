import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListIncidentsComponent } from './list-incidents/list-incidents.component';
import { OverviewIncidentComponent } from './overview-incident/overview-incident.component';


const routes: Routes = [
  {
    path: '',
    component: ListIncidentsComponent,
  },
  {
    path: ':id',
    component: OverviewIncidentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentsRoutingModule { }
