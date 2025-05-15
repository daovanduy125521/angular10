import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users: any[] = [];
  userIds = [1, 2, 3];

  constructor(private userService: UserService) {}

  ngOnInit() {
    from(this.userIds).pipe(
      mergeMap(id => this.userService.getUserById(id))
    ).subscribe(user => {
      this.users.push(user); // nhận kết quả từ từng request
    });
  }
}
