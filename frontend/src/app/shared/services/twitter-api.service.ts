import { IAdvancedStatsObject } from './../../interfaces/advanced-stats-object';
import { IStatsObject } from './../../interfaces/stats-object';
import { environment } from './../../../environments/environment';
import { IUserObject } from './../../interfaces/user-object';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TwitterApiService {
    private baseUrl: string;

    currentTwitterUser: BehaviorSubject<IUserObject>;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.baseUrl;
        this.currentTwitterUser = new BehaviorSubject(null);
    }

    searchUsers(query: string): Observable<IUserObject[]> {
        const params = new HttpParams().set('q', query);
        return this.http.get<IUserObject[]>(`${this.baseUrl}/users`, { params });
    }

    getUserStats(userId: string): Observable<IStatsObject> {
        return this.http.get<IStatsObject>(`${this.baseUrl}/users/${userId}/basic`);
    }

    getUserAdvancedStats(userId: string): Observable<IAdvancedStatsObject> {
        return this.http.get<IAdvancedStatsObject>(`${this.baseUrl}/users/${userId}/advanced`);
    }

    setCurrentUser(user: IUserObject): void {
        this.currentTwitterUser.next(user);
    }
}
