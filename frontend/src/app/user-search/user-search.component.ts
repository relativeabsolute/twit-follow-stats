import { IUserObject } from './../interfaces/user-object';
import { TwitterApiService } from './../shared/services/twitter-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.less'],
})
export class UserSearchComponent implements OnInit {
    users: IUserObject[] = [];

    constructor(private twitterApiService: TwitterApiService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        const userSearch = this.route.snapshot.params.user;
        this.twitterApiService.searchUsers(userSearch).subscribe((users) => {
            this.users = users;
        });
    }

    onProfileClicked(user: IUserObject): void {
        this.twitterApiService.setCurrentUser(user);
        this.router.navigate(['/follow-stats', user.id]);
    }
}
