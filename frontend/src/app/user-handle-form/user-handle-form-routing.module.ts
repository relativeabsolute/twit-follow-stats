import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHandleFormComponent } from './user-handle-form.component';

const routes: Routes = [{ path: '', component: UserHandleFormComponent, data: { animation: 'UserHandle' } }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserHandleFormRoutingModule {}
