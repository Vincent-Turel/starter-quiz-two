import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {BehaviorSubject} from 'rxjs';
import {USERS} from '../mocks/user-list.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = USERS;
  user$ = new BehaviorSubject<User[]>(this.users);
  constructor() { }
  addUser(user: User): void {
    if (this.users.length === 0) {
      user.id = 0;
    }
    else {
      user.id = this.users[this.users.length - 1].id + 1;
    }
    this.users.push(user);
    this.user$.next(this.users);
  }
  deleteUser(user: User): void {
    this.users.splice(this.users.indexOf(user), 1);
    this.user$.next(this.users);
  }
}
