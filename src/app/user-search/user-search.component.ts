import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.less'],
})
export class UserSearchComponent implements OnInit {
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        console.log(`User: ${this.route.snapshot.params['user']}`);
        // TODO: authenticate app with twitter and search for users with the given name or handle
    }
}
