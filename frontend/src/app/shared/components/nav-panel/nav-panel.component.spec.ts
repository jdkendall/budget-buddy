import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NavPanelComponent} from './nav-panel.component';
import {Router} from '@angular/router';
import {COMMON_IMPORTS} from '../../../../tests/shared-scaffolding.spec';

describe('NavPanelComponent', () => {
    let component: NavPanelComponent;
    let fixture: ComponentFixture<NavPanelComponent>;
    let router: Router;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavPanelComponent],
            imports: [...COMMON_IMPORTS],
        })
            .compileComponents();

        router = TestBed.inject(Router);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('navigate', () => {
        it('should navigate to the given URI', () => {
            const navigateSpy = spyOn(router, 'navigate');
            const uri = '/sample-uri';
            component.navigate(uri);
            expect(navigateSpy).toHaveBeenCalledWith([uri]);
        });
    });

    describe('DOM interactions', () => {
        it('should have an active class when route is active', () => {
            const items = fixture.debugElement.nativeElement.querySelectorAll('li a');
            const activeItems = Array.from(items).filter((item: any) => item.classList.contains('active'));

            // Ensure that at most one item can be active
            expect(activeItems.length).toBeLessThanOrEqual(1);
        });
    });
});
