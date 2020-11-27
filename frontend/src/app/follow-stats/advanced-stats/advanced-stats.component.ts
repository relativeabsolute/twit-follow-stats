import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-advanced-stats',
    templateUrl: './advanced-stats.component.html',
    styleUrls: ['./advanced-stats.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedStatsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
