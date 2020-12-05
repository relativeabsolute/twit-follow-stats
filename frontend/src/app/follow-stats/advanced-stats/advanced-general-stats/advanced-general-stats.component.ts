import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { GeneralStatsDisplayTypes } from '../../../interfaces/stats-display-types';
// TODO: TS aliases
import { IAdvancedGeneralStats } from '../../../interfaces/advanced-stats-object';

@Component({
    selector: 'app-advanced-general-stats',
    templateUrl: './advanced-general-stats.component.html',
    styleUrls: ['./advanced-general-stats.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedGeneralStatsComponent implements OnInit {
    // TODO: carousel to display follower or following
    @Input() followerGeneralStats: IAdvancedGeneralStats;
    @Input() followingGeneralStats: IAdvancedGeneralStats;
    @Input() generalStatsType: GeneralStatsDisplayTypes;

    constructor() {}

    ngOnInit(): void {}
}
