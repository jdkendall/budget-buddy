import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {Component} from '@angular/core';
import {Auth} from '@angular/fire/auth';
import {Router} from '@angular/router';

// Mock components for routes
@Component({template: ''})
class MockLoginComponent {
}

@Component({template: ''})
class MockDashboardComponent {
}

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let mockAuth = {
        signOut: jasmine.createSpy('signOut').and.resolveTo()
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent, MockLoginComponent, MockDashboardComponent], // add mock components
            imports: [
                RouterTestingModule.withRoutes([
                    {path: 'login', component: MockLoginComponent, data: {showLogin: true, showLogout: false}},
                    {path: 'dashboard', component: MockDashboardComponent, data: {showLogin: false, showLogout: true}}
                ])
            ],
            providers: [
                {provide: Auth, useValue: mockAuth}
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should update showLogin and showLogout flags based on route config data', async () => {
        const router = TestBed.inject(Router);

        await fixture.whenStable();

        // Simulate navigation to the 'login' route
        await router.navigate(['/login']);
        fixture.detectChanges();
        expect(component.showLogin).toBeTrue();
        expect(component.showLogout).toBeFalse();

        // Now simulate navigation to 'dashboard' route
        await router.navigate(['/dashboard']);
        fixture.detectChanges();
        expect(component.showLogin).toBeFalse();
        expect(component.showLogout).toBeTrue();
    });
});
