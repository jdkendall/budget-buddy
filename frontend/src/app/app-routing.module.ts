import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {LoginComponent} from './login/login.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectAuthorizedToHome = () => redirectLoggedInTo(['/']);

const homePageRoute = {
  path: '',
  component: HomePageComponent,
  canActivate: [AuthGuard],
  data: {authGuardPipe: redirectUnauthorizedToLogin}
};

const loginRoute = {
  path: 'login',
  component: LoginComponent,
  canActivate: [AuthGuard],
  data: {authGuardPipe: redirectAuthorizedToHome}
};

const fallbackRoute = {
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full' as const
};

const routes: Routes = [
  homePageRoute,
  loginRoute,
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
