import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
    declarations: [UserProfileComponent],
    imports: [CommonModule, MatListModule],
    exports: [UserProfileComponent],
})
export class SharedModule {}
