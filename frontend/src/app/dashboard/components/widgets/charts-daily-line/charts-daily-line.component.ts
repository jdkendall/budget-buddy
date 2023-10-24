import {Component} from '@angular/core';
import {Plotly} from 'angular-plotly.js/lib/plotly.interface';

@Component({
    selector: 'app-charts-daily-line',
    templateUrl: './charts-daily-line.component.html',
    styleUrls: ['./charts-daily-line.component.less']
})
export class ChartsDailyLineComponent {
    readonly description: string = 'Plots daily financial activities over a timeline.';

    readonly layout: Plotly.Layout = {
        width: 360,
        height: 180,
        title: {text: '<b>Daily Transactions</b>'},
        margin: {
            l: 20,
            r: 20,
            b: 30,
            t: 60,
            pad: 0
        }
    };

    readonly data: Plotly.Data = [
        {x: [1, 2, 3], y: [1, 2, 3], name: 'Foo', type: 'scatter', mode: 'lines'},
        {x: [1, 2, 3], y: [5, 6, 8], name: 'Bar', type: 'scatter', mode: 'lines'},
        {x: [1, 2, 3], y: [9, 1, 2], name: 'Baz', type: 'scatter', mode: 'lines'},
    ];

    readonly frameConfig: Plotly.Config = {
        staticPlot: true
    }

    // Static plot graph
    graph: Plotly.Figure = {
        data: this.data,
        layout: this.layout,
        frames: this.frameConfig
    };
}
