import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSearchRoutingModule } from './user-search-routing.module';
import { UserSearchComponent } from './user-search.component';
import { MaterialModule } from '../material/material.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [UserSearchComponent],
    imports: [CommonModule, UserSearchRoutingModule, MaterialModule, MatListModule, SharedModule],
})
export class UserSearchModule {}
