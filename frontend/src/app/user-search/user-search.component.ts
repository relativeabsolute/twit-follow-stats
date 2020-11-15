import { IUserObject } from './../interfaces/user-object';
import { TwitterApiService } from './../shared/services/twitter-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.less'],
})
export class UserSearchComponent implements OnInit {
    users: IUserObject[] = [];

    constructor(private twitterApiService: TwitterApiService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        const userSearch = this.route.snapshot.params['user'];
        this.twitterApiService.searchUsers(userSearch).subscribe((users) => {
            this.users = users;
            console.log(JSON.stringify(this.users));
        });
    }
}
