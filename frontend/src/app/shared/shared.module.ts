import { BackButtonComponent } from './components/back-button/back-button.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PercentageDisplayComponent } from './components/percentage-display/percentage-display.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [UserProfileComponent, PercentageDisplayComponent, BackButtonComponent],
    imports: [CommonModule, MatListModule, FlexLayoutModule, MatButtonModule, MaterialModule],
    exports: [UserProfileComponent, PercentageDisplayComponent, BackButtonComponent, FlexLayoutModule],
})
export class SharedModule {}
