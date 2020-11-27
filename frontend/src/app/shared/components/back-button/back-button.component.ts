import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-back-button',
    templateUrl: './back-button.component.html',
})
export class BackButtonComponent {
    @Input() destination: string;

    constructor(private router: Router) {}

    onClick(): void {
        this.router.navigate([this.destination]);
    }
}
