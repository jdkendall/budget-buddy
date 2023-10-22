import {Component} from '@angular/core';
import {Plotly} from 'angular-plotly.js/lib/plotly.interface';

@Component({
  selector: 'app-charts-savings-donut',
  templateUrl: './charts-savings-donut.component.html',
  styleUrls: ['./charts-savings-donut.component.less']
})
export class ChartsSavingsDonutComponent {
  readonly description: string = 'Showcases savings distribution in a circular chart.';
  readonly layout: Plotly.Layout = {
    width: 300,
    height: 300,
    title: {text: '<b>Savings Distribution</b>'},
    margin: {
      l: 20,
      r: 20,
      b: 20,
      t: 60,
      pad: 4
    }
  };

  readonly data: Plotly.Data = [
    {values: [1, 2, 3], labels: ['Second Breakfast', 'Vogon Poetry', 'Borg Upgrades'], type: 'pie', hole: 0.4},
  ];

  readonly frameConfig: Plotly.Config = {
    staticPlot: true
  }

  graph: Plotly.Figure = {
    data: this.data,
    layout: this.layout,
    frames: this.frameConfig
  };
}
