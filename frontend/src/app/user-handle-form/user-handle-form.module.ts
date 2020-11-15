import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHandleFormRoutingModule } from './user-handle-form-routing.module';
import { UserHandleFormComponent } from './user-handle-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '../material/material.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [UserHandleFormComponent],
    imports: [
        CommonModule,
        UserHandleFormRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
    ],
})
export class UserHandleFormModule {}
