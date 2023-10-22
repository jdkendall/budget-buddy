import { Component } from '@angular/core';
import {faBell, faReceipt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alerts-notifications',
  templateUrl: './alerts-notifications.component.html',
  styleUrls: ['./alerts-notifications.component.less']
})
export class AlertsNotificationsComponent {
  readonly description: string = 'Keeps you informed of important financial updates and reminders.';

  protected readonly faReceipt = faReceipt;
  protected readonly faBell = faBell;
}
