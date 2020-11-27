import { IUserObject } from './../interfaces/user-object';
import { IStatsObject } from './../interfaces/stats-object';
import { TwitterApiService } from './../shared/services/twitter-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-follow-stats',
    templateUrl: './follow-stats.component.html',
    styleUrls: ['./follow-stats.component.less'],
})
export class FollowStatsComponent implements OnInit {
    stats: IStatsObject;
    twitterUser: IUserObject;

    constructor(private twitterApiService: TwitterApiService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        const userId = this.activatedRoute.snapshot.params.user_id;
        this.twitterApiService.getUserStats(userId).subscribe((statsObject) => {
            this.twitterUser = this.twitterApiService.currentTwitterUser.getValue();
            this.stats = statsObject;
        });
    }
}
