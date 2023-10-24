import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DashboardComponent} from './dashboard.component';
import {WidgetType} from '../widgets/polywidget/polywidget.component';
import {DASHBOARD_PAGE_IMPORTS, POLYWIDGET_DECLARATIONS} from '../../../../tests/shared-scaffolding.spec';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [DashboardComponent, ...POLYWIDGET_DECLARATIONS],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize dashboard with widgets', () => {
        expect(component.dashboard.length).toBeGreaterThan(0);
    });

    it('should add items to dashboard', () => {
        const initialLength = component.dashboard.length;
        component.addItem(2, 2, 'charts-expenses-pie' as WidgetType);
        expect(component.dashboard.length).toEqual(initialLength + 1);
    });

    it('should remove items from dashboard', () => {
        const initialLength = component.dashboard.length;
        const itemToRemove = component.dashboard[0];
        component.removeItem(itemToRemove);
        expect(component.dashboard.length).toEqual(initialLength - 1);
    });

    it('should call onDeleteItem when trash event is emitted from child component', () => {
        spyOn(component, 'onDeleteItem').and.callThrough();
        const polyWidget = fixture.debugElement.query(By.css('app-polywidget'));
        polyWidget.triggerEventHandler('trashed', new MouseEvent('click'));
        expect(component.onDeleteItem).toHaveBeenCalled();
    });

    it('should update options on options change', () => {
        if (component?.options?.api) {
            spyOn(component.options.api as any, 'optionsChanged').and.callThrough();
            component.changedOptions();
            expect(component.options.api.optionsChanged).toHaveBeenCalled();
        } else {
            fail('API is undefined');
        }
    });

});
