// src/app/user.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  getUserById(id: number): Observable<any> {
    console.log(`Đang gọi API cho ID: ${id}`);
    return of({ id, name: `User ${id}` }).pipe(delay(1000)); // giả lập độ trễ 1s
  }
}
