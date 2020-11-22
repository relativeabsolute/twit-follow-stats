import { IStatsObject } from './../../interfaces/stats-object';
import { environment } from './../../../environments/environment';
import { IUserObject } from './../../interfaces/user-object';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TwitterApiService {
    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.baseUrl;
    }

    searchUsers(query: string): Observable<IUserObject[]> {
        const params = new HttpParams().set('q', query);
        return this.http.get<IUserObject[]>(`${this.baseUrl}/users`, { params });
    }

    getUserStats(userId: string): Observable<IStatsObject> {
        return this.http.get<IStatsObject>(`${this.baseUrl}/users/${userId}`);
    }
}
