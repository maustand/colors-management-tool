import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Incident } from '@core/models/incident';

@Component({
  selector: 'ta9-incident-card',
  templateUrl: './incident-card.component.html',
  styleUrls: ['./incident-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncidentCardComponent {

  @Input() incident!: Incident;

  @Input() basePath: string;

  dateFormatForPipe: string;

  constructor() { 
    this.dateFormatForPipe = 'dd/MM/yyy';
    this.basePath = '';
  }
}
