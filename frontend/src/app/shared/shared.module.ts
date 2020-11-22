import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PercentageDisplayComponent } from './components/percentage-display/percentage-display.component';

@NgModule({
    declarations: [UserProfileComponent, PercentageDisplayComponent],
    imports: [CommonModule, MatListModule, FlexLayoutModule],
    exports: [UserProfileComponent, PercentageDisplayComponent, FlexLayoutModule],
})
export class SharedModule {}
