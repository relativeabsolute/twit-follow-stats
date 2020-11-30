import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IAdvancedDemographicStats } from '../../../interfaces/advanced-stats-object';

@Component({
    selector: 'app-advanced-demographic-stats',
    templateUrl: './advanced-demographic-stats.component.html',
    styleUrls: ['./advanced-demographic-stats.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedDemographicStatsComponent implements OnInit {
    @Input() followerDemographicStats: IAdvancedDemographicStats;
    @Input() followingDemographicStats: IAdvancedDemographicStats;

    constructor() {}

    ngOnInit(): void {}
}
