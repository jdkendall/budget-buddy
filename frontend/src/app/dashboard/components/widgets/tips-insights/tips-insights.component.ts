import { Component } from '@angular/core';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tips-insights',
  templateUrl: './tips-insights.component.html',
  styleUrls: ['./tips-insights.component.less']
})
export class TipsInsightsComponent {
  readonly description: string = 'Shares financial advice and observations based on user data.';

  protected readonly faLightbulb = faLightbulb;
}
