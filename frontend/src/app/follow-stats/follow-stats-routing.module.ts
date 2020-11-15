import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowStatsComponent } from './follow-stats.component';

const routes: Routes = [{ path: ':user_id', component: FollowStatsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FollowStatsRoutingModule {}
