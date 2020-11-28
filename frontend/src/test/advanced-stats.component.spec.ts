import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedStatsComponent } from '../app/follow-stats/advanced-stats/advanced-stats.component';

import {} from 'jasmine';

describe('AdvancedStatsComponent', () => {
    let component: AdvancedStatsComponent;
    let fixture: ComponentFixture<AdvancedStatsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AdvancedStatsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AdvancedStatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
