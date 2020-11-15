import { IUserObject } from './../../../interfaces/user-object';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent implements OnInit {
    @Input() user: IUserObject;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    getFollowStats(): void {
        this.router.navigate(['/follow-stats', this.user.id]);
    }
}
