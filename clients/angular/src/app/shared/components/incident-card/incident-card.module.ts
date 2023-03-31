import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentCardComponent } from './incident-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IncidentCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [IncidentCardComponent],
})
export class IncidentCardModule {}
