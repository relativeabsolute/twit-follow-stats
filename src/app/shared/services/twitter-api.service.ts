import { IUserObject } from './../../interfaces/user-object';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.local';

@Injectable({
    providedIn: 'root',
})
export class TwitterApiService {
    private baseUrl: string;
    private headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.baseUrl = 'https://api.twitter.com/1.1';
        this.headers = new HttpHeaders().set('Authorization', `Bearer ${environment.bearerToken}`);
    }

    searchUsers(query: string): Observable<IUserObject[]> {
        const params = new HttpParams().set('q', query);
        return this.http.get<IUserObject[]>(`${this.baseUrl}/users/search.json`, { headers: this.headers, params });
    }
}
