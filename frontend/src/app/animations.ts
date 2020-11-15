import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideAnimation = trigger('routeAnimations', [
    transition('UserHandle <=> UserSearch', [
        // TODO: setup animations
    ]),
]);
