import { IStatsDisplayConfig } from './../../../../interfaces/stats-display-config';
import { GeneralStatsDisplayTypes } from './../../../../interfaces/stats-display-types';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IAdvancedGeneralStats } from '../../../../interfaces/advanced-stats-object';
import { mapBooleansToData } from '../../../libraries/stats-display.library';

@Component({
    selector: 'app-advanced-general-stats-display',
    templateUrl: './advanced-general-stats-display.component.html',
    styleUrls: ['./advanced-general-stats-display.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedGeneralStatsDisplayComponent implements OnInit {
    @Input() stats: IAdvancedGeneralStats;

    statTypes = {
        protected: GeneralStatsDisplayTypes.Protected,
        verified: GeneralStatsDisplayTypes.Verified,
    };

    _displayType: GeneralStatsDisplayTypes = GeneralStatsDisplayTypes.Protected;
    get displayType(): GeneralStatsDisplayTypes {
        return this._displayType;
    }
    @Input() set displayType(value: GeneralStatsDisplayTypes) {
        this._displayType = value;
        this.updateStatsDisplay();
    }

    statsConfig: IStatsDisplayConfig;

    constructor() {
        this.statsConfig = {
            showLabels: true,
            showLegend: false,
            legendPosition: 'right',
            gradient: true,
            data: [],
            trimLabels: false,
        };
    }

    ngOnInit(): void {
        this.updateStatsDisplay();
    }

    private updateStatsDisplay(): void {
        switch (this._displayType) {
            case GeneralStatsDisplayTypes.Protected:
                this.statsConfig.data = Object.keys(this.stats.protectedCount).map(
                    mapBooleansToData('Protected', this.stats.protectedCount),
                );
                break;
            case GeneralStatsDisplayTypes.Verified:
                this.statsConfig.data = Object.keys(this.stats.verifiedCount).map(mapBooleansToData('Verified', this.stats.verifiedCount));
                break;
        }
    }
}
