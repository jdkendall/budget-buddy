import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faArrowsUpDownLeftRight, faTrash, faTrashAlt, faTrashCan} from '@fortawesome/free-solid-svg-icons';

export const widgetTypes = [
  'current-balance',
  'total-income',
  'total-expenses',
  'net-cash-flow',
  'expenses-pie',
  'monthly-bar',
  'daily-line',
  'savings-donut',
  'recent-transactions',
  'budget-overview',
  'savings-goals',
  'alerts-notifications',
  'upcoming-bills',
  'cash-flow-forecast',
  'quick-actions',
  'tips-insights',
  'monthly-comparison',
  'savings-rate',
  'debt-overview'
] as const;

export type WidgetType = typeof widgetTypes[number];

@Component({
  selector: 'app-polywidget',
  templateUrl: './polywidget.component.html',
  styleUrls: ['./polywidget.component.less']
})
export class PolywidgetComponent {
  @Output() trashed: EventEmitter<MouseEvent | TouchEvent> = new EventEmitter();
  @Input() type: WidgetType | null = null;
  protected readonly faArrowsUpDownLeftRight = faArrowsUpDownLeftRight;
  protected readonly faTrash = faTrash;

  onDelete($event: MouseEvent | TouchEvent) {
    if (confirm('Are you sure you want to remove this widget?')) {
      this.trashed.emit($event);
    }
  }

}
