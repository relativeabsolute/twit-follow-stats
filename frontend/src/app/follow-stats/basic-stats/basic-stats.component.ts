import { IStatsObject } from './../../interfaces/stats-object';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-basic-stats',
    templateUrl: './basic-stats.component.html',
    styleUrls: ['./basic-stats.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicStatsComponent implements OnInit {
    @Input() stats: IStatsObject;

    constructor() {}

    ngOnInit(): void {}
}
