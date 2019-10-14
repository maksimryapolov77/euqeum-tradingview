import { Component, OnInit } from '@angular/core';
import { createChart, IChartApi, ISeriesApi } from 'lightweight-charts';

@Component({
  selector: 'app-light-chart-container',
  templateUrl: './light-chart-container.component.html',
  styleUrls: ['./light-chart-container.component.css']
})
export class LightChartContainerComponent implements OnInit {
  // chart: IChartApi;
  // lineSeries: ISeriesApi<'Line'>;
  constructor() {
    // this.chart = createChart(document.body, { width: 400, height: 300 });
    // this.lineSeries = this.chart.addLineSeries();

    // this.lineSeries.setData(
    //   [
    //     { time: '2019-04-11', value: 80.01 },
    //     { time: '2019-04-12', value: 96.63 },
    //     { time: '2019-04-13', value: 76.64 },
    //     { time: '2019-04-14', value: 81.89 },
    //     { time: '2019-04-15', value: 74.43 },
    //     { time: '2019-04-16', value: 80.01 },
    //     { time: '2019-04-17', value: 96.63 },
    //     { time: '2019-04-18', value: 76.64 },
    //     { time: '2019-04-19', value: 81.89 },
    //     { time: '2019-04-20', value: 74.43 },
    //   ]
    // );
  }

  ngOnInit() {
  }
}
