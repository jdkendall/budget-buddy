import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LandingPageComponent} from './landing-page.component';
import {Router} from '@angular/router';

// Create a mock for the Router
class MockRouter {
    navigate = jasmine.createSpy('navigate');
}

describe('LandingPageComponent', () => {
    let component: LandingPageComponent;
    let fixture: ComponentFixture<LandingPageComponent>;
    let router: Router;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LandingPageComponent],
            providers: [
                {provide: Router, useClass: MockRouter}
            ]
        })
            .compileComponents();

        router = TestBed.inject(Router);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LandingPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('login', () => {
        it('should navigate to the login page', () => {
            component.login();
            expect(router.navigate).toHaveBeenCalledWith(['/login']);
        });
    });

    describe('DOM interactions', () => {
        it('should call login method when "Get Started" button is clicked', () => {
            spyOn(component, 'login');
            const button = fixture.debugElement.nativeElement.querySelector('.get-started-btn');
            button.click();
            expect(component.login).toHaveBeenCalled();
        });
    });

    describe('features section', () => {
        it('should display the correct headings for each feature', () => {
            const featureHeadings = fixture.debugElement.nativeElement.querySelectorAll('.feature h3');
            expect(featureHeadings[0].textContent).toContain('Dashboard Overview');
            expect(featureHeadings[1].textContent).toContain('Expense Tracking');
            expect(featureHeadings[2].textContent).toContain('Future Planning');
        });
    });
});
