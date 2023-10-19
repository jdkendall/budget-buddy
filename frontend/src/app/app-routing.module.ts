import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {LoginComponent} from './login/login.component';
import {LandingPageComponent} from './home/landing-page/landing-page.component';
import {LedgerComponent} from './ledger/ledger/ledger.component';
import {LedgerPageComponent} from './ledger/ledger-page/ledger-page.component';
import {NavPanelComponent} from './nav-panel/nav-panel.component';
import {SpendingPageComponent} from './spending/spending-page/spending-page.component';
import {AlertsPageComponent} from './alerts/alerts-page/alerts-page.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectAuthorizedToDashboard = () => redirectLoggedInTo(['/dashboard']);

const dashboardRoute = {
  path: 'dashboard',
  component: DashboardComponent,
};

const ledgerRoute = {
  path: 'ledger',
  component: LedgerPageComponent,
};
const spendingHabitsRoute = {
  path: 'spending',
  component: SpendingPageComponent,
};
const alertsRoute = {
  path: 'alerts',
  component: AlertsPageComponent,
};

const loginRoute = {
  path: 'login',
  component: LoginComponent,
  canActivate: [AuthGuard],
  data: {authGuardPipe: redirectAuthorizedToDashboard}
};

const homeRoute = {
  path: '',
  component: LandingPageComponent,
  canActivate: [AuthGuard],
  data: {
    authGuardPipe: redirectAuthorizedToDashboard,
    showLogin: true
  }
};

const appRoute = {
  path: '',
  component: NavPanelComponent,
  canActivateChildren: [AuthGuard],
  data: {
    authGuardPipe: redirectUnauthorizedToLogin,
    showLogout: true
  },
  children: [dashboardRoute, ledgerRoute, spendingHabitsRoute, alertsRoute]
}

const fallbackRoute = {
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full' as const
};

const routes: Routes = [
  homeRoute,
  loginRoute,
  appRoute,
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
