import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHandleFormRoutingModule } from './user-handle-form-routing.module';
import { UserHandleFormComponent } from './user-handle-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [UserHandleFormComponent],
    imports: [
        CommonModule,
        UserHandleFormRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ],
})
export class UserHandleFormModule {}
