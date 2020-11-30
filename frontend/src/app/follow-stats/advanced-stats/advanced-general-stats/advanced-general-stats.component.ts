import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
// TODO: TS aliases
import { IAdvancedGeneralStats } from '../../../interfaces/advanced-stats-object';

@Component({
    selector: 'app-advanced-general-stats',
    templateUrl: './advanced-general-stats.component.html',
    styleUrls: ['./advanced-general-stats.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedGeneralStatsComponent implements OnInit {
    @Input() followerGeneralStats: IAdvancedGeneralStats;
    @Input() followingGeneralStats: IAdvancedGeneralStats;

    constructor() {}

    ngOnInit(): void {}
}
