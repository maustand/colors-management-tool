import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentCardComponent } from './incident-card.component';

@NgModule({
  declarations: [IncidentCardComponent],
  imports: [CommonModule],
  exports: [IncidentCardComponent],
})
export class IncidentCardModule {}
