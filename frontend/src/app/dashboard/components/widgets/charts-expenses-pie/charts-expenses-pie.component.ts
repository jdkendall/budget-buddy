import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Plotly} from 'angular-plotly.js/lib/plotly.interface';
import {BudgetService} from '../../../services/budget.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-charts-expenses-pie',
    templateUrl: './charts-expenses-pie.component.html',
    styleUrls: ['./charts-expenses-pie.component.less']
})
export class ChartsExpensesPieComponent implements OnInit, OnDestroy {
    readonly description: string = 'A graphical representation of your expenses, broken down by category.';

    readonly layout: Plotly.Layout = {
        width: 360,
        height: 360,
        title: {text: '<b>Top 5 Expenses Breakdown</b>'},
        margin: {
            l: 20,
            r: 0,
            b: 0,
            t: 60,
            pad: 4
        }
    };

    readonly frameConfig: Plotly.Config = {
        staticPlot: true,
    }

    data: Plotly.Data = [{values: [], labels: [], type: 'pie'}];

    budgetService: BudgetService = inject(BudgetService);
    budgetOverviewSub?: Subscription;

    ngOnInit() {
        this.budgetOverviewSub = this.budgetService.getBudgetOverview().subscribe(data => {
            if(data) {
                const newVals = data?.topExpenditures?.map(x => x.amount.toUnit() * -1);
                const newLabels = data?.topExpenditures?.map(x => x.category.name);
                this.data[0].values = newVals;
                this.data[0].labels = newLabels;
            } else {
                this.data[0].values = [1,2,3];
                this.data[0].labels = [1,2,3];
            }
        });
    }

    ngOnDestroy() {
        this.budgetOverviewSub?.unsubscribe();
    }
}
