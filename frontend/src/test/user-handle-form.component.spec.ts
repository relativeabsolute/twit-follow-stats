import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHandleFormComponent } from '../app/user-handle-form/user-handle-form.component';

describe('UserHandleFormComponent', () => {
    let component: UserHandleFormComponent;
    let fixture: ComponentFixture<UserHandleFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserHandleFormComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserHandleFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
