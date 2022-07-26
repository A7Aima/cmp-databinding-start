import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // if Alias is not provided we still can use the property name (element to fetch it globally)
  // "srvElement" is the alias name of the property name "element"
  @Input("srvElement") element: { type: string, name: string, content: string };
  constructor() { }

  ngOnInit(): void {
  }

}
