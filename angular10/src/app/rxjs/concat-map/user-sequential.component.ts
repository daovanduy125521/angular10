// src/app/user-sequential/user-sequential.component.ts
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-sequential',
  templateUrl: './user-sequential.component.html'
})
export class UserSequentialComponent implements OnInit {
  userIds = [1, 2, 3, 4];
  users: any[] = [];
  loading: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  fetchUsersSequentially() {
    this.users = [];
    this.loading = true;

    from(this.userIds).pipe(
      concatMap(id => this.userService.getUserById(id))
    ).subscribe({
      next: user => {
        this.users.push(user);
      },
      complete: () => {
        this.loading = false;
        console.log('Hoàn tất tất cả lệnh gọi API');
      }
    });
  }
}
