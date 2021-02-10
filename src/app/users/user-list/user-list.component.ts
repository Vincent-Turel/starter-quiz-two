import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: User[];

  constructor(private userService: UserService) {
    this.userService.user$.subscribe(users => this.userList = users);
  }

  ngOnInit(): void {
  }

  userSelected(selected: boolean): void {
    console.log('event for selection received from child:', selected);
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user);
  }
}
