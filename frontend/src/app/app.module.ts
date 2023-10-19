import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
// import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { LedgerPageComponent } from './ledger/ledger-page/ledger-page.component';
import { LedgerComponent } from './ledger/ledger/ledger.component';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { SpendingPageComponent } from './spending/spending-page/spending-page.component';
import { AlertsPageComponent } from './alerts/alerts-page/alerts-page.component';

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
    AlertsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
  ],
  providers: [
    // ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
