import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentTileBoxComponent } from './incident-tile-box.component';

@NgModule({
  declarations: [
    IncidentTileBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IncidentTileBoxComponent
  ]
})
export class IncidentTileBoxModule { }
