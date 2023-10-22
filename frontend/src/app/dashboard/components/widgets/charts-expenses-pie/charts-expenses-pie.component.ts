import { Component } from '@angular/core';
import {Plotly} from 'angular-plotly.js/lib/plotly.interface';

@Component({
  selector: 'app-charts-expenses-pie',
  templateUrl: './charts-expenses-pie.component.html',
  styleUrls: ['./charts-expenses-pie.component.less']
})
export class ChartsExpensesPieComponent {
  readonly description: string = 'A graphical representation of your expenses, broken down by category.';

  readonly layout: Plotly.Layout = {
    width: 300,
    height: 300,
    title: {text: '<b>Expenses Breakdown</b>' },
    margin: {
      l: 20,
      r: 0,
      b: 0,
      t: 60,
      pad: 4
    }
  };

  readonly data: Plotly.Data = [
    {values: [1, 2, 3], labels: ['Foo', 'Bar', 'Baz'], type: 'pie'},
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
