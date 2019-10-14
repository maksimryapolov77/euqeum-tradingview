import { Component, OnInit } from '@angular/core';
// import { AppNavComponent } from '../app-nav/app-nav.component';

@Component({
  selector: 'app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.css']
})
export class AppViewComponent implements OnInit {
  viewMode = 'Light Chart';

  lightChart = 'Light Chart';
  techChart = 'Tech Chart';
  tradingChart = 'Trading Chart';

  constructor() { }

  ngOnInit() {
  }

  onNavClick(viewMode) {
    this.viewMode = viewMode;
    console.log(this.viewMode);
  }

}
