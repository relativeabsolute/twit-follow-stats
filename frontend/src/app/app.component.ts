import { slideAnimation } from './animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    animations: [slideAnimation],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    title = 'twit-follow-stats';

    prepareRoute(outlet: RouterOutlet): any {
        return outlet?.activatedRouteData?.animation;
    }
}
