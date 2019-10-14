import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { TvChartContainerComponent } from './app-view/tv-chart-container/tv-chart-container.component';
import { AppViewComponent } from './app-view/app-view.component';
import { LightChartContainerComponent } from './app-view/light-chart-container/light-chart-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    TvChartContainerComponent,
    AppViewComponent,
    LightChartContainerComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
