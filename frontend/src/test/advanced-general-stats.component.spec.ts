import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedGeneralStatsComponent } from '../app/follow-stats/advanced-stats/advanced-general-stats/advanced-general-stats.component';

import {} from 'jasmine';

describe('AdvancedGeneralStatsComponent', () => {
    let component: AdvancedGeneralStatsComponent;
    let fixture: ComponentFixture<AdvancedGeneralStatsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AdvancedGeneralStatsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AdvancedGeneralStatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
