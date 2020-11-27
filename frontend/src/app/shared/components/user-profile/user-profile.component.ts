import { IUserObject } from './../../../interfaces/user-object';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent implements OnInit {
    @Input() user: IUserObject;
    @Output() profileClicked: EventEmitter<IUserObject>;

    constructor(private router: Router) {
        this.profileClicked = new EventEmitter();
    }

    ngOnInit(): void {}

    emitProfileClick(): void {
        this.profileClicked.emit(this.user);
        this.router.navigate(['/follow-stats', this.user.id]);
    }
}
