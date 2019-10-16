import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import 'ag-grid-community';
import { AppGridService } from '../service/app-grid.service';
import { HttpClient } from '@angular/common/http';
import { TvChartContainerComponent } from '../tv-chart-container/tv-chart-container.component';


@Component({
  selector: 'app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.scss']
})
export class AppGridComponent implements OnInit {
  @Output() symbolChanged = new EventEmitter<string>();

  columnDefs = [
    { headerName: 'Symbol', field: 'v.short_name', sortable: true, filter: true},
    { headerName: 'Original Name', field: 'v.original_name', sortable: true, filter: true, resizable: true },
    { headerName: 'Lp', field: 'v.lp', sortable: true, filter: true, resizable: true },
    { headerName: 'Ask', field: 'v.ask', sortable: true, filter: true, resizable: true },
    { headerName: 'Bid', field: 'v.bid', sortable: true, filter: true, resizable: true },
    { headerName: 'Open Price', field: 'v.open_price', sortable: true, filter: true, resizable: true },
    { headerName: 'High Price', field: 'v.high_price', sortable: true, filter: true, resizable: true },
    { headerName: 'Low Price', field: 'v.low_price', sortable: true, filter: true, resizable: true },
    { headerName: 'Prev Close Price', field: 'v.prev_close_price', sortable: true, filter: true, resizable: true },
    { headerName: 'Volume', field: 'v.volume', sortable: true, filter: true, resizable: true },
  ];

  private gridApi;

  rowData: any;
  service: AppGridService;
  rowSelection = 'single';
  tvChartContainer: TvChartContainerComponent;

  constructor(private gridService: AppGridService, private http: HttpClient) {
    this.service = gridService;
    this.http = http;
  }

  async ngOnInit() {
    const data: any = await this.service.getAskAndBid();
    this.rowData = data.d;
  }

  onGridReady(params: { api: { sizeColumnsToFit: { (): void; (): void; }; }; }) {
    params.api.sizeColumnsToFit();
    window.addEventListener('resize', () => {
      setTimeout(() => {
        params.api.sizeColumnsToFit();
      });
    });
  }

  onRowClicked(event: { data: { v: { short_name: string; }; }; }) {
    const symbol: string = event.data.v.short_name;
    this.symbolChanged.emit(symbol);
  }

}
