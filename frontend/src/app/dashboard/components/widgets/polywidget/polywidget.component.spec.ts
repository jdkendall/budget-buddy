import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {PolywidgetComponent, widgetTypes} from './polywidget.component';
import {PlotlyModule} from 'angular-plotly.js';
import * as plotlyjs from 'plotly.js-dist-min';
import {DASHBOARD_PAGE_IMPORTS, POLYWIDGET_DECLARATIONS} from '../../../../../tests/shared-scaffolding.spec';

PlotlyModule.plotlyjs = plotlyjs;

describe('PolywidgetComponent', () => {
    let component: PolywidgetComponent;
    let fixture: ComponentFixture<PolywidgetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: POLYWIDGET_DECLARATIONS,
            imports: DASHBOARD_PAGE_IMPORTS
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PolywidgetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the correct widget type based on input', () => {
        for (const widgetType of widgetTypes) {
            component.type = widgetType;
            fixture.detectChanges();
            const widgetElement = fixture.debugElement.query(By.css(`app-${widgetType}`));
            expect(widgetElement).withContext(`Expected widget type ${widgetType} to be displayed`).toBeTruthy();
        }
    });

    it('should not display any widget type if input is null', () => {
        component.type = null;
        fixture.detectChanges();
        for (const widgetType of widgetTypes) {
            const widgetElement = fixture.debugElement.query(By.css(`app-${widgetType}`));
            expect(widgetElement).withContext(`Expected widget type ${widgetType} not to be displayed`).toBeNull();
        }
    });

    it('should emit trashed event if confirmed', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        const spy = spyOn(component.trashed, 'emit');

        const trashButton = fixture.debugElement.query(By.css('.trash-me')).nativeElement;
        trashButton.click();

        expect(spy).toHaveBeenCalled();
    });

    it('should not emit trashed event if canceled', () => {
        spyOn(window, 'confirm').and.returnValue(false);
        const spy = spyOn(component.trashed, 'emit');

        const trashButton = fixture.debugElement.query(By.css('.trash-me')).nativeElement;
        trashButton.click();

        expect(spy).not.toHaveBeenCalled();
    });
});
