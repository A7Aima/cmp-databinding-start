import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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
  @ViewChild("newServerContentData", { static: true }) serverContentInput: ElementRef;

  onAddServer(inputName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputName.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
    inputName.value = "";
    this.serverContentInput.nativeElement.value = "";
  }

  onAddBlueprint(inputName: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: inputName.value,
      blueprintContent: this.serverContentInput.nativeElement.value,
    });
    inputName.value = "";
    this.serverContentInput.nativeElement.value = "";
  }
}
