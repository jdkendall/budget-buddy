import {ComponentFixture, TestBed} from '@angular/core/testing';
import {QuickbarComponent} from './quickbar.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {LEDGER_PAGE_IMPORTS} from '../../../../tests/shared-scaffolding.spec';
import {NgxCurrencyDirective} from 'ngx-currency';

describe('QuickbarComponent', () => {
    let component: QuickbarComponent;
    let fixture: ComponentFixture<QuickbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [QuickbarComponent],
            imports: [...LEDGER_PAGE_IMPORTS, FormsModule, NgxCurrencyDirective]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(QuickbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('addEntry', () => {
        it('should emit a new transaction when all fields are populated', () => {
            spyOn(component.addTransaction, 'emit');

            component.amount = 100;
            component.transactionParty = 'Test Party';
            component.category = 'Rent';
            component.date = new Date();

            component.addEntry();

            expect(component.addTransaction.emit).toHaveBeenCalled();
            expect(component.amount).toBeUndefined();
        });

        it('should throw an error when required fields are not populated', () => {
            component.amount = undefined;
            component.transactionParty = 'Test Party';
            component.category = 'Rent';
            component.date = new Date();

            expect(() => component.addEntry()).toThrowError('No');
        });

        it('should bind input fields to component properties', async () => {
            fixture.detectChanges();
            await fixture.whenStable();

            // const amountInput = fixture.debugElement.query(By.css('#amount')).nativeElement;
            // amountInput.value = 100;
            // amountInput.dispatchEvent(new Event('input'));
            // fixture.detectChanges();

            const partyInput = fixture.debugElement.query(By.css('#party')).nativeElement;
            partyInput.value = 'Test Party';
            partyInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            const categorySelect = fixture.debugElement.query(By.css('#category')).nativeElement;
            categorySelect.value = categorySelect.options[0].value;  // Assume first category is 'Rent'
            categorySelect.dispatchEvent(new Event('change'));
            fixture.detectChanges();

            // TODO: Need to find a way to test input with currency mask -- currently not propagating changes to the
            //       model while in test scaffolding
            // expect(component.amount).toEqual(100);
            expect(component.transactionParty).toEqual('Test Party');
            expect(component.category).toEqual('Rent');
        });
    });
});
