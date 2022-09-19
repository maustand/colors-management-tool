import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IncidentsStore } from '@core/store/incidents/incidents.store.service';

@Component({
  selector: 'ta9-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateIncidentComponent {
  newIncidentForm: FormGroup;

  @Output() dismissed: EventEmitter<void>;

  constructor(private incidentStore: IncidentsStore) {
    this.newIncidentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
    this.dismissed = new EventEmitter<void>()
  }

  onSubmit() {
    if (this.newIncidentForm.valid) {
      this.incidentStore.create(this.newIncidentForm.value);
      this.dismissed.emit();
    }
  }
}
