import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDemographicStatsComponent } from '../app/follow-stats/advanced-stats/advanced-demographic-stats/advanced-demographic-stats.component';

import {} from 'jasmine';

describe('AdvancedDemographicStatsComponent', () => {
    let component: AdvancedDemographicStatsComponent;
    let fixture: ComponentFixture<AdvancedDemographicStatsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AdvancedDemographicStatsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AdvancedDemographicStatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
