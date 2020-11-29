import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowStatsRoutingModule } from './follow-stats-routing.module';
import { FollowStatsComponent } from './follow-stats.component';
import { MaterialModule } from '../material/material.module';
import { BasicStatsComponent } from './basic-stats/basic-stats.component';
import { AdvancedStatsComponent } from './advanced-stats/advanced-stats.component';
import { AdvancedGeneralStatsComponent } from './advanced-stats/advanced-general-stats/advanced-general-stats.component';
import { AdvancedDemographicStatsComponent } from './advanced-stats/advanced-demographic-stats/advanced-demographic-stats.component';

@NgModule({
    declarations: [FollowStatsComponent, BasicStatsComponent, AdvancedStatsComponent, AdvancedGeneralStatsComponent, AdvancedDemographicStatsComponent],
    imports: [CommonModule, FollowStatsRoutingModule, MaterialModule, MatListModule, MatTabsModule, MatMenuModule, SharedModule],
})
export class FollowStatsModule {}
