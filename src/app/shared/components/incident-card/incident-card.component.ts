import { Component, Input, OnInit } from '@angular/core';
import { Incident } from '@core/models/incident';

@Component({
  selector: 'ta9-incident-card',
  templateUrl: './incident-card.component.html',
  styleUrls: ['./incident-card.component.scss']
})
export class IncidentCardComponent {

  @Input() incident!: Incident;

  @Input() baseUrl: string;

  dateFormatForPipe: string;

  constructor() { 
    this.dateFormatForPipe = 'dd/MM/yyy';
    this.baseUrl = '';
  }

}
