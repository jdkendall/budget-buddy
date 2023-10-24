import {Component} from '@angular/core';
import {Plotly} from 'angular-plotly.js/lib/plotly.interface';

@Component({
    selector: 'app-charts-monthly-bar',
    templateUrl: './charts-monthly-bar.component.html',
    styleUrls: ['./charts-monthly-bar.component.less']
})
export class ChartsMonthlyBarComponent {
    readonly description: string = 'Visualizes monthly income and expenses in a bar graph format.';

    readonly layout: Plotly.Layout = {
        width: 360,
        height: 180,
        title: {text: '<b>Monthly Transactions</b>'},
        margin: {
            l: 20,
            r: 20,
            b: 30,
            t: 60,
            pad: 0
        },
        barmode: 'group'
    };

    readonly data: Plotly.Data = [
        {x: [''], y: [1], name: 'Income', type: 'bar'},
        {x: [''], y: [2], name: 'Expenses', type: 'bar'},
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
