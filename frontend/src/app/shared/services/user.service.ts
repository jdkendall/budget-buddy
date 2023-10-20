// user.service.ts
import {inject, Injectable} from '@angular/core';
import {Auth, User} from '@angular/fire/auth';
import {from, Observable, of, switchMap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private auth: Auth = inject(Auth);
  private user$: Observable<User | null>;

  constructor() {
    this.user$ = new Observable<User | null>(sub => {
      // Return the unsubscribe function so it's called when the observable is completed/destroyed
      return this.auth.onAuthStateChanged(user => sub.next(user),);
    });
  }


  // Observable that emits the current idToken or null
  getIdToken(): Observable<string | null> {
    return this.user$.pipe(
      switchMap(user => {
        if (user) {
          return from(user.getIdToken()); // This returns a Promise<string>
        }
        return of(null); // Wrapping null in an array makes it an observable emitting null
      })
    );
  }
}
