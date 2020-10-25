import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(): void {
    this.users = this.usersService.getUsers();
  }

}
