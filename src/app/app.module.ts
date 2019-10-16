import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { TvChartContainerComponent } from './tv-chart-container/tv-chart-container.component';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { AppComponent } from './app.component';
import { AppGridComponent } from './app-grid/app-grid.component';
import { AppGridService } from './service/app-grid.service';

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: './assets',
  defaultOptions: { scrollBeyondLastLine: false },
  // onMonacoLoad: () => { console.log((window as any).monaco); }
};


@NgModule({
  declarations: [
    AppComponent,
    TvChartContainerComponent,
    MonacoEditorComponent,
    AppGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig),
    HttpClientModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [
    AppGridService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
