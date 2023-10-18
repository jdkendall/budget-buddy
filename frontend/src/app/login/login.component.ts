import {Component, OnInit, OnDestroy, inject, Optional} from '@angular/core';
import * as firebaseui from 'firebaseui';
import {Auth, GoogleAuthProvider, EmailAuthProvider} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, OnDestroy {
  ui: firebaseui.auth.AuthUI;
  private auth: Auth;

  constructor(@Optional() auth: Auth) {
    this.ui = new firebaseui.auth.AuthUI(auth);
    this.auth = auth;
  }

  async ngOnInit() {
    const uiConfig = {
      signInSuccessUrl: '/',  // where to redirect after login
      // signInFlow: 'popup',
      signInOptions: [
        new GoogleAuthProvider().providerId,
        new EmailAuthProvider().providerId,
        // other providers if needed
      ],
    };

    if (!this.ui.isPendingRedirect()) {
      this.ui.start('#firebaseui-auth-container', uiConfig);
    }
  }

  ngOnDestroy() {
    this.ui.delete().then(() => {
      console.log('Successfully deleted the UI instance');
    })
      .catch(error => {
        console.error('Error deleting the UI instance:', error);
      });
  }
}
