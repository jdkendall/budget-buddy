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
    DateRangeFilterComponent
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
    MatSortModule
  ],
  providers: [
    // ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
