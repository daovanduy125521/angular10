import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(private http: HttpClient) { }

    search(term: string): Observable<any> {
        if (!term.trim()) return new Observable(observer => observer.next({ items: [] }));
        return this.http.get<any>(`https://api.github.com/search/users?q=${term}`);
    }
}
