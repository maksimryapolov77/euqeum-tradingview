import { Component, OnInit } from '@angular/core';

import 'ag-grid-community';
import { AppGridService } from '../service/app-grid.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.scss']
})
export class AppGridComponent implements OnInit {
  columnDefs = [
    { headerName: 'Symbol', field: 'v.short_name', sortable: true, filter: true },
    { headerName: 'Ask', field: 'v.ask', sortable: true, filter: true },
    { headerName: 'Bid', field: 'v.bid', sortable: true, filter: true }
  ];

  private gridApi;

  rowData: any;
  service: AppGridService;
  rowSelection = 'single';

  constructor(private gridService: AppGridService, private http: HttpClient) {
    this.service = gridService;
    this.http = http;
  }

  async ngOnInit() {
    const data: any = await this.service.getAskAndBid();
    this.rowData = data.d;
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }
  onRowClicked(event) {
    const symbol: string = event.data.v.short_name;
    console.log(symbol);
  }
}
