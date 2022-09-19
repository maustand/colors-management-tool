import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IncidentCardModule } from '@shared/components/incident-card/incident-card.module';
import { IncidentTileBoxModule } from '@shared/components/incident-tile-box/incident-tile-box.module';

import { SearchBoxModule } from '@shared/components/search-box/search-box.module';
import { IncidentsRoutingModule } from './incident-routing.module';
import { ListIncidentsComponent } from './list-incidents/list-incidents.component';
import { OverviewIncidentComponent } from './overview-incident/overview-incident.component';


@NgModule({
  declarations: [
    ListIncidentsComponent,
    OverviewIncidentComponent,
  ],
  imports: [
    CommonModule,
    IncidentsRoutingModule,
    IncidentTileBoxModule,
    IncidentCardModule,
    SearchBoxModule
  ]
})
export class IncidentsModule { }
