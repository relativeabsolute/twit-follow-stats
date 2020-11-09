import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchComponent } from '../app/user-search/user-search.component';

describe('UserSearchComponent', () => {
    let component: UserSearchComponent;
    let fixture: ComponentFixture<UserSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserSearchComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});