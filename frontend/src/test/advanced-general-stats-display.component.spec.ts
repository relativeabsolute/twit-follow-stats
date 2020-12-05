import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedGeneralStatsDisplayComponent } from '../app/follow-stats/advanced-stats/advanced-general-stats/advanced-general-stats-display/advanced-general-stats-display.component';

import {} from 'jasmine';

describe('AdvancedGeneralStatsDisplayComponent', () => {
    let component: AdvancedGeneralStatsDisplayComponent;
    let fixture: ComponentFixture<AdvancedGeneralStatsDisplayComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AdvancedGeneralStatsDisplayComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AdvancedGeneralStatsDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
