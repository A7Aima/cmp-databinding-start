import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  constructor() { }

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
  newServerContent = '';

  onAddServer(inputName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputName.value,
      serverContent: this.newServerContent,
    });
    inputName.value = "";
    this.newServerContent = '';
  }

  onAddBlueprint(inputName: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: inputName.value,
      blueprintContent: this.newServerContent,
    });
    inputName.value = "";
    this.newServerContent = '';
  }
}
