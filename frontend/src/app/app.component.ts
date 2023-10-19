import {Component, OnInit, Optional} from '@angular/core';
import {ActivatedRoute, Event, EventType, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
import {Auth} from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Budget Buddy';
  showLogin: boolean = false;
  showLogout: boolean = false;

  constructor(@Optional() private auth: Auth, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      if (event.type === EventType.NavigationEnd) {
        const route = this.activatedRoute.firstChild;
        const configData: any = route?.routeConfig?.data;
        if (configData) {
          this.showLogin = configData['showLogin'] === true;
          this.showLogout = configData['showLogout'] === true;
        }
      }
    });
  }

  login() {
    // Navigate to the login page or initiate the Firebase login flow
    this.router.navigate(['/login']);
  }

  async logout() {
    await this.auth.signOut();

    // Navigate to the login page or initiate the Firebase login flow
    this.router.navigate(['/']);
  }
}
