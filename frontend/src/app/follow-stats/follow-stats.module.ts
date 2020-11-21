import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowStatsRoutingModule } from './follow-stats-routing.module';
import { FollowStatsComponent } from './follow-stats.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [FollowStatsComponent],
    imports: [CommonModule, FollowStatsRoutingModule, MaterialModule, SharedModule],
})
export class FollowStatsModule {}
