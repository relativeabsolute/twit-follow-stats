import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowStatsRoutingModule } from './follow-stats-routing.module';
import { FollowStatsComponent } from './follow-stats.component';

@NgModule({
    declarations: [FollowStatsComponent],
    imports: [CommonModule, FollowStatsRoutingModule],
})
export class FollowStatsModule {}
