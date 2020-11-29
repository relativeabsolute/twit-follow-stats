import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IAdvancedStatsObject } from '../../interfaces/advanced-stats-object';

export type StatType = 'general' | 'demographics';

@Component({
    selector: 'app-advanced-stats',
    templateUrl: './advanced-stats.component.html',
    styleUrls: ['./advanced-stats.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedStatsComponent implements OnInit {
    @Input() advancedStats: IAdvancedStatsObject;

    statType: StatType = 'general';

    constructor() {}

    ngOnInit(): void {}
}
