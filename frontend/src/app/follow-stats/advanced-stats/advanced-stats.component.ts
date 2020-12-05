import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { GeneralStatsDisplayTypes } from '../../interfaces/stats-display-types';
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

    statType: StatType;
    advancedGeneralType: GeneralStatsDisplayTypes;
    generalStatTypes = {
        Protected: GeneralStatsDisplayTypes.Protected,
        Verified: GeneralStatsDisplayTypes.Verified,
    };
    generalStatTypeNames = Object.keys(this.generalStatTypes);

    constructor() {}

    ngOnInit(): void {
        this.statType = 'general';
        this.advancedGeneralType = this.generalStatTypes.Protected;
    }

    setGeneralType(event: any, selectedType: GeneralStatsDisplayTypes): void {
        this.statType = 'general';
        this.advancedGeneralType = selectedType;
    }
}
