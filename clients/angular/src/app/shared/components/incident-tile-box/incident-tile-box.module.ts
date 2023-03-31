import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentTileBoxComponent } from './incident-tile-box.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IncidentTileBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    IncidentTileBoxComponent
  ]
})
export class IncidentTileBoxModule { }
