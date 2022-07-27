import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  // it restricts the value contained inside the components.
  // (putting ViewEncapsulation.None removes the component encapsulation ).
  // Default is ViewEncapsulation.Emulated.
  // ShadowDom will hide the whole logic in the dom
})
export class AppComponent {
  serverElements = [{ type: "server", name: "Testserver", content: "Just a test!" }];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: { blueprintName: string, blueprintContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent,
    });
  }

}
