import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {ChangeDetectorRef} from '@angular/core';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../../../../environments/environment';

class MockFirebaseUI {
    start = jasmine.createSpy('start');
    delete = jasmine.createSpy('delete').and.resolveTo();
}

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let mockRouter: jasmine.SpyObj<Router>;

    beforeEach(async () => {
        mockRouter = jasmine.createSpyObj('Router', ['navigate']);

        await TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                provideFirebaseApp(() => initializeApp(environment.firebase)),
                provideAuth(() => getAuth())
            ],
            providers: [
                {provide: Router, useValue: mockRouter},
                ChangeDetectorRef
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        (component as any).ui = new MockFirebaseUI();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('should call ui.start with correct configuration', () => {
            component.ngOnInit();
            expect((component as any).ui.start).toHaveBeenCalled();
        });

        it('should redirect and hide window on successful login', () => {
            const callback = (component as any).ui.start.calls.first().args[1].callbacks.signInSuccessWithAuthResult;
            expect(callback).toBeDefined();
            expect(callback()).toBe(false);
            expect(component.showWindow).toBe(false);
            expect(mockRouter.navigate).toHaveBeenCalledWith(['/home/dashboard']);
        });
    });
    describe('ngOnDestroy', () => {
        it('should call ui.delete', async () => {
            component.ngOnDestroy();
            expect((component as any).ui.delete).toHaveBeenCalled();
        });
    });

    describe('login-container visibility', () => {
        it('should be visible by default', () => {
            const container = fixture.debugElement.nativeElement.querySelector('.login-container');
            expect(container.style.visibility).toBe('visible');
        });

        it('should become hidden after successful login', () => {
            component.redirectOnLogin();
            fixture.detectChanges();
            const container = fixture.debugElement.nativeElement.querySelector('.login-container');
            expect(container.style.visibility).toBe('hidden');
        });
    });
});
