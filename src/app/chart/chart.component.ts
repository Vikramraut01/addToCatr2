import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;
  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
        datasets: [
          {
            label: 'india',
            data: ['8', '10', '7', '9', '10', '11', '15', '11'],
            backgroundColor: 'black',
          },
          {
            label: 'Pak',
            data: ['10', '9', '11', '8', '7', '12', '9', '10'],
            backgroundColor: 'red',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
