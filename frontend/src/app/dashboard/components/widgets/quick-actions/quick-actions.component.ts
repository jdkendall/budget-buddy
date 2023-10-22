import { Component } from '@angular/core';
import {faRocket} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.less']
})
export class QuickActionsComponent {
  readonly description: string = 'Offers shortcuts to common financial tasks.';

  protected readonly faRocket = faRocket;
}
