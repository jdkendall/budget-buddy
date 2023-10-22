import {Component, EventEmitter} from '@angular/core';
import {GridsterConfig, GridsterItem, GridsterItemComponentInterface} from 'angular-gridster2';
import {WidgetType} from '../widgets/polywidget/polywidget.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {
  options: GridsterConfig = {
    // itemChangeCallback: this.itemChange,
    // itemResizeCallback: this.itemResize,
    gridType: 'fixed',
    maxItemCols: 3,
    maxItemRows: 3,
    fixedColWidth: 150,
    fixedRowHeight: 150,
    draggable: {
      enabled: true,
      dragHandleClass: '.drag-handle',
      // ignoreContent: true,
      // ignoreContentClass: 'card-content',
      start: () => {
        document.body.classList.add('.grabbing-cursor')
      },
      stop: () => {
        document.body.classList.remove('.grabbing-cursor')
      }
    },
    enableEmptyCellDrop: true,
    enableEmptyCellDrag: true,
    swap: true,
    swapWhileDragging: true,
    enableOccupiedCellDrop: true,
    enableEmptyCellContextMenu: true,
    pushItems: true,
    emptyCellContextMenuCallback: () => {
      console.info('empty cell context menu');
    }
  };
  dashboard: GridsterItem[] = [];

  itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.info('itemChanged', item, itemComponent);
  }

  itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.dashboard = [];
    const widgetDefs: WidgetDef[] = [
      {cols: 2, rows: 2, type: 'expenses-pie'},
      {cols: 2, rows: 1, type: 'daily-line'},
      {cols: 2, rows: 1, type: 'monthly-bar'},
      {cols: 2, rows: 1, type: 'total-income'},
      {cols: 2, rows: 1, type: 'total-expenses'},
      {cols: 2, rows: 1, type: 'net-cash-flow'},
      {cols: 2, rows: 1, type: 'current-balance'},
      {cols: 2, rows: 2, type: 'savings-donut'},
      {cols: 2, rows: 2, type: 'recent-transactions'},
      {cols: 2, rows: 1, type: 'budget-overview'},
      {cols: 2, rows: 2, type: 'savings-goals'},
      {cols: 2, rows: 1, type: 'alerts-notifications'},
      {cols: 2, rows: 2, type: 'upcoming-bills'},
      {cols: 2, rows: 1, type: 'cash-flow-forecast'},
      {cols: 2, rows: 1, type: 'quick-actions'},
      {cols: 2, rows: 1, type: 'tips-insights'},
      {cols: 2, rows: 1, type: 'monthly-comparison'},
      {cols: 2, rows: 1, type: 'savings-rate'},
      {cols: 2, rows: 1, type: 'debt-overview'}
    ];
    widgetDefs.forEach(widget => this.addItem(widget.cols, widget.rows, widget.type as WidgetType));
  }

  changedOptions() {
    this.options.api?.optionsChanged?.();
  }

  removeItem(item: GridsterItem) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(cols: number, rows: number, type: WidgetType) {
    this.dashboard.push({cols, rows, x: 0, y: 0, type} as GridsterItem);
  }

  onDeleteItem($event: MouseEvent | TouchEvent, item: GridsterItem) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
    this.changedOptions();
  }
}

interface WidgetDef {
  cols: number,
  rows: number,
  type: WidgetType
}
