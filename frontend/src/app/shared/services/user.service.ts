// user.service.ts
import {inject, Injectable} from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import firebase from 'firebase/compat';
import Unsubscribe = firebase.Unsubscribe;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | null = null;
  private auth: Auth = inject(Auth);

  constructor() {
    this.user = this.auth.currentUser;
    this.auth.onAuthStateChanged(user => this.user = user);
  }

  async waitForUser(): Promise<User | null> {
    if (this.user !== null) {
      return this.user;
    }

    return new Promise<User | null>(resolve => {
      const unsub: Unsubscribe = this.auth.onAuthStateChanged(user => {
        unsub();
        resolve(user);
      });
    });
  }

  async getIdToken() {
    const user = await this.waitForUser();
    return user?.getIdToken();
  }
}
