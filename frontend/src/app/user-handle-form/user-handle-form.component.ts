import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-handle-form',
    templateUrl: './user-handle-form.component.html',
    styleUrls: ['./user-handle-form.component.less'],
})
export class UserHandleFormComponent implements OnInit {
    userHandleForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {}

    ngOnInit(): void {
        this.userHandleForm = this.fb.group({
            userHandle: new FormControl('', Validators.required),
        });
    }

    onSubmit(): void {
        const userHandle = this.userHandleForm.value.userHandle;
        this.router.navigate(['/user-search', userHandle]);
    }
}
