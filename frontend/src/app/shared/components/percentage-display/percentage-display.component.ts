import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-percentage-display',
    templateUrl: './percentage-display.component.html',
    styleUrls: ['./percentage-display.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PercentageDisplayComponent implements OnInit {
    @Input() numerator: number;
    @Input() denominator: number;
    @Input() label: string;

    get percentage(): number {
        return this.numerator / this.denominator;
    }

    constructor() {}

    ngOnInit(): void {}
}
