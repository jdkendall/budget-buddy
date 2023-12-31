import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/components/dashboard/dashboard.component';
import {AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {LoginComponent} from './login/components/login/login.component';
import {LandingPageComponent} from './home/components/landing-page/landing-page.component';
import {LedgerPageComponent} from './ledger/components/ledger-page/ledger-page.component';
import {NavPanelComponent} from './shared/components/nav-panel/nav-panel.component';
import {SpendingPageComponent} from './spending/components/spending-page/spending-page.component';
import {AlertsPageComponent} from './alerts/components/alerts-page.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectAuthorizedToDashboard = () => redirectLoggedInTo(['/home/dashboard']);

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

const baseRoute = {
  path: '',
  component: LandingPageComponent,
  canActivate: [AuthGuard],
  data: {
    authGuardPipe: redirectAuthorizedToDashboard,
    showLogin: true
  }
};

const homeFallbackRoute = {
  path: '',
  redirectTo: '/home/dashboard',
  pathMatch: 'full' as const
}

const homeRoute = {
  path: 'home',
  component: NavPanelComponent,
  canActivateChildren: [AuthGuard],
  data: {
    authGuardPipe: redirectUnauthorizedToLogin,
    showLogout: true
  },
  children: [dashboardRoute, ledgerRoute, spendingHabitsRoute, alertsRoute, homeFallbackRoute]
}

const fallbackRoute = {
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full' as const
};

const routes: Routes = [
  baseRoute,
  loginRoute,
  homeRoute,
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
