import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStatsComponent } from '../app/follow-stats/basic-stats/basic-stats.component';

describe('BasicStatsComponent', () => {
    let component: BasicStatsComponent;
    let fixture: ComponentFixture<BasicStatsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BasicStatsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BasicStatsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
