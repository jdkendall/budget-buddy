import {PolywidgetComponent} from '../app/dashboard/components/widgets/polywidget/polywidget.component';
import {
    SummaryCurrentBalanceComponent
} from '../app/dashboard/components/widgets/summary-current-balance/summary-current-balance.component';
import {
    SummaryTotalIncomeComponent
} from '../app/dashboard/components/widgets/summary-total-income/summary-total-income.component';
import {
    SummaryTotalExpensesComponent
} from '../app/dashboard/components/widgets/summary-total-expenses/summary-total-expenses.component';
import {
    SummaryNetCashFlowComponent
} from '../app/dashboard/components/widgets/summary-net-cash-flow/summary-net-cash-flow.component';
import {
    ChartsExpensesPieComponent
} from '../app/dashboard/components/widgets/charts-expenses-pie/charts-expenses-pie.component';
import {
    ChartsMonthlyBarComponent
} from '../app/dashboard/components/widgets/charts-monthly-bar/charts-monthly-bar.component';
import {
    ChartsDailyLineComponent
} from '../app/dashboard/components/widgets/charts-daily-line/charts-daily-line.component';
import {
    ChartsSavingsDonutComponent
} from '../app/dashboard/components/widgets/charts-savings-donut/charts-savings-donut.component';
import {
    RecentTransactionsComponent
} from '../app/dashboard/components/widgets/recent-transactions/recent-transactions.component';
import {BudgetOverviewComponent} from '../app/dashboard/components/widgets/budget-overview/budget-overview.component';
import {SavingsGoalsComponent} from '../app/dashboard/components/widgets/savings-goals/savings-goals.component';
import {
    AlertsNotificationsComponent
} from '../app/dashboard/components/widgets/alerts-notifications/alerts-notifications.component';
import {UpcomingBillsComponent} from '../app/dashboard/components/widgets/upcoming-bills/upcoming-bills.component';
import {
    CashFlowForecastComponent
} from '../app/dashboard/components/widgets/cash-flow-forecast/cash-flow-forecast.component';
import {QuickActionsComponent} from '../app/dashboard/components/widgets/quick-actions/quick-actions.component';
import {TipsInsightsComponent} from '../app/dashboard/components/widgets/tips-insights/tips-insights.component';
import {
    MonthlyComparisonComponent
} from '../app/dashboard/components/widgets/monthly-comparison/monthly-comparison.component';
import {SavingsRateComponent} from '../app/dashboard/components/widgets/savings-rate/savings-rate.component';
import {DebtOverviewComponent} from '../app/dashboard/components/widgets/debt-overview/debt-overview.component';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';
import {PlotlyModule} from 'angular-plotly.js';
import {GridsterModule} from 'angular-gridster2';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {RouterTestingModule} from '@angular/router/testing';

export const COMMON_IMPORTS = [RouterTestingModule]
export const DASHBOARD_PAGE_IMPORTS = [...COMMON_IMPORTS, FontAwesomeTestingModule, PlotlyModule, GridsterModule]
export const LEDGER_PAGE_IMPORTS = [...COMMON_IMPORTS, MatTableModule, MatPaginatorModule, NoopAnimationsModule, MatSortModule]
export const BUDGET_PAGE_IMPORTS = [...COMMON_IMPORTS, FontAwesomeTestingModule, PlotlyModule]
export const ALERTS_PAGE_IMPORTS = [...COMMON_IMPORTS]
export const AUTH_PAGE_IMPORTS = [...COMMON_IMPORTS]
export const HOME_PAGE_IMPORTS = [...COMMON_IMPORTS]

export const POLYWIDGET_DECLARATIONS = [
    PolywidgetComponent,
    SummaryCurrentBalanceComponent,
    SummaryTotalIncomeComponent,
    SummaryTotalExpensesComponent,
    SummaryNetCashFlowComponent,
    ChartsExpensesPieComponent,
    ChartsMonthlyBarComponent,
    ChartsDailyLineComponent,
    ChartsSavingsDonutComponent,
    RecentTransactionsComponent,
    BudgetOverviewComponent,
    SavingsGoalsComponent,
    AlertsNotificationsComponent,
    UpcomingBillsComponent,
    CashFlowForecastComponent,
    QuickActionsComponent,
    TipsInsightsComponent,
    MonthlyComparisonComponent,
    SavingsRateComponent,
    DebtOverviewComponent,
]

