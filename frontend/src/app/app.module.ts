import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
// import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {LoginComponent} from './login/components/login/login.component';
import {DashboardComponent} from './dashboard/components/dashboard/dashboard.component';
import {LandingPageComponent} from './home/components/landing-page/landing-page.component';
import {LedgerPageComponent} from './ledger/components/ledger-page/ledger-page.component';
import {LedgerComponent} from './ledger/components/ledger/ledger.component';
import {NavPanelComponent} from './shared/components/nav-panel/nav-panel.component';
import {SpendingPageComponent} from './spending/components/spending-page/spending-page.component';
import {AlertsPageComponent} from './alerts/components/alerts-page.component';
import {QuickbarComponent} from './ledger/components/quickbar/quickbar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DateRangeFilterComponent} from './shared/components/date-range-filter/date-range-filter.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxCurrencyDirective} from 'ngx-currency';
import {
  SummaryCurrentBalanceComponent
} from './dashboard/components/widgets/summary-current-balance/summary-current-balance.component';
import {
  SummaryTotalIncomeComponent
} from './dashboard/components/widgets/summary-total-income/summary-total-income.component';
import {
  SummaryTotalExpensesComponent
} from './dashboard/components/widgets/summary-total-expenses/summary-total-expenses.component';
import {
  SummaryNetCashFlowComponent
} from './dashboard/components/widgets/summary-net-cash-flow/summary-net-cash-flow.component';
import {
  ChartsExpensesPieComponent
} from './dashboard/components/widgets/charts-expenses-pie/charts-expenses-pie.component';
import {
  ChartsMonthlyBarComponent
} from './dashboard/components/widgets/charts-monthly-bar/charts-monthly-bar.component';
import {ChartsDailyLineComponent} from './dashboard/components/widgets/charts-daily-line/charts-daily-line.component';
import {
  ChartsSavingsDonutComponent
} from './dashboard/components/widgets/charts-savings-donut/charts-savings-donut.component';
import {
  RecentTransactionsComponent
} from './dashboard/components/widgets/recent-transactions/recent-transactions.component';
import {BudgetOverviewComponent} from './dashboard/components/widgets/budget-overview/budget-overview.component';
import {SavingsGoalsComponent} from './dashboard/components/widgets/savings-goals/savings-goals.component';
import {
  AlertsNotificationsComponent
} from './dashboard/components/widgets/alerts-notifications/alerts-notifications.component';
import {UpcomingBillsComponent} from './dashboard/components/widgets/upcoming-bills/upcoming-bills.component';
import {
  CashFlowForecastComponent
} from './dashboard/components/widgets/cash-flow-forecast/cash-flow-forecast.component';
import {QuickActionsComponent} from './dashboard/components/widgets/quick-actions/quick-actions.component';
import {TipsInsightsComponent} from './dashboard/components/widgets/tips-insights/tips-insights.component';
import {
  MonthlyComparisonComponent
} from './dashboard/components/widgets/monthly-comparison/monthly-comparison.component';
import {SavingsRateComponent} from './dashboard/components/widgets/savings-rate/savings-rate.component';
import {DebtOverviewComponent} from './dashboard/components/widgets/debt-overview/debt-overview.component';
import {NgForOf} from '@angular/common';
import {GridsterComponent, GridsterItemComponent} from 'angular-gridster2';
import {PolywidgetComponent} from './dashboard/components/widgets/polywidget/polywidget.component';
import { PlotlyViaCDNModule } from 'angular-plotly.js';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';

PlotlyViaCDNModule.setPlotlyVersion('latest');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LandingPageComponent,
    LedgerPageComponent,
    LedgerComponent,
    NavPanelComponent,
    SpendingPageComponent,
    AlertsPageComponent,
    QuickbarComponent,
    DateRangeFilterComponent,
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
    PolywidgetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxCurrencyDirective,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    PlotlyViaCDNModule,
    NgForOf,
    GridsterComponent,
    GridsterItemComponent,
    FontAwesomeModule,
    MatButtonModule
  ],
  providers: [
    // ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
