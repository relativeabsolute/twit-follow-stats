import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'follow-stats', loadChildren: () => import('./follow-stats/follow-stats.module').then((m) => m.FollowStatsModule) },
    {
        path: 'user-handle-form',
        loadChildren: () => import('./user-handle-form/user-handle-form.module').then((m) => m.UserHandleFormModule),
    },
    { path: '', redirectTo: '/user-handle-form', pathMatch: 'full' },
    { path: 'user-search', loadChildren: () => import('./user-search/user-search.module').then(m => m.UserSearchModule) },
    { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
