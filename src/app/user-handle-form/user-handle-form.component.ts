import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-handle-form',
    templateUrl: './user-handle-form.component.html',
    styleUrls: ['./user-handle-form.component.less'],
})
export class UserHandleFormComponent implements OnInit {
    userHandleForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.userHandleForm = this.fb.group({
            userHandle: new FormControl('', Validators.required),
        });
    }

    onSubmit(): void {
        const userHandle = this.userHandleForm.value.userHandle;
    }
}