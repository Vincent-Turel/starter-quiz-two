import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: User;

  @Output()
  userSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  userSupressed: EventEmitter<User> = new EventEmitter<User>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  deleteUser(): void {
    this.userSupressed.emit(this.user);
  }

  selectUser(): void {
    this.userSelected.emit(true);
  }

  editUser(): void {
    this.router.navigate(['edit-user/' + this.user.id]);
  }

}
