import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  symbol = 'DEI';

  constructor() { }

  onSymbolChanged(symbol: string) {
    this.symbol = symbol;
  }
}
