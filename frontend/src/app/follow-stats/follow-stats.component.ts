import { TwitterApiService } from './../shared/services/twitter-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-follow-stats',
    templateUrl: './follow-stats.component.html',
    styleUrls: ['./follow-stats.component.less'],
})
export class FollowStatsComponent implements OnInit {
    constructor(private twitterApiService: TwitterApiService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        const userId = this.activatedRoute.snapshot.params.user_id;
        this.twitterApiService.getUserStats(userId).subscribe(() => {});
    }
}
