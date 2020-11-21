import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageDisplayComponent } from '../app/shared/components/percentage-display/percentage-display.component';

import {} from 'jasmine';

describe('PercentageDisplayComponent', () => {
    let component: PercentageDisplayComponent;
    let fixture: ComponentFixture<PercentageDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PercentageDisplayComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PercentageDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
