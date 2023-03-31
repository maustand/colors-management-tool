import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ta9-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {

  @Input() isOpen: boolean;

  @Output() sideBarClosed: EventEmitter<void>

  constructor() { 
    this.isOpen = false;
    this.sideBarClosed = new EventEmitter();
  }
}
