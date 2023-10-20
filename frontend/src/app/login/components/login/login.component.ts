import {ChangeDetectorRef, Component, OnDestroy, OnInit, Optional} from '@angular/core';
import * as firebaseui from 'firebaseui';
import {Auth, EmailAuthProvider, GoogleAuthProvider} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, OnDestroy {
  ui: firebaseui.auth.AuthUI;
  showWindow: boolean = true;
  private router: Router;

  constructor(@Optional() auth: Auth, router: Router, private cd: ChangeDetectorRef) {
    this.ui = new firebaseui.auth.AuthUI(auth);
    this.router = router;
  }

  async ngOnInit() {
    const uiConfig: firebaseui.auth.Config = {
      signInSuccessUrl: '/',  // where to redirect after login
      signInFlow: 'popup',
      signInOptions: [
        new GoogleAuthProvider().providerId,
        new EmailAuthProvider().providerId,
        // other providers if needed
      ],
      callbacks: {
        signInSuccessWithAuthResult: this.redirectOnLogin
      },
      siteName: 'Budget Buddy',
    };

    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  ngOnDestroy() {
    this.ui.delete().then(() => {
      console.log('Successfully deleted the UI instance');
    })
      .catch(error => {
        console.error('Error deleting the UI instance:', error);
      });
  }

  redirectOnLogin = (authResult: unknown, redirectUrl?: string | undefined) => {
    this.showWindow = false;
    this.cd.detectChanges();
    this.router.navigate(['/home/dashboard']);
    return false;  // don't redirect to the sign-in page after login
  }
}
