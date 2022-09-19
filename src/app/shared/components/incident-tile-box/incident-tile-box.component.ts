import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Incident } from '@core/models/incident';

@Component({
  selector: 'ta9-incident-tile-box',
  templateUrl: './incident-tile-box.component.html',
  styleUrls: ['./incident-tile-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncidentTileBoxComponent {

  @Input() incident!: Incident;

  @Input() basePath?: string;

  constructor() { }
}
