import { Component, OnInit } from '@angular/core';
import { UserInterface } from './interfaces/user.interface';
import { UsersDataInterface } from './interfaces/users-data.interface';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: UserInterface[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(): void {
    // this.users = this.usersService.getUsers();
    this.usersService.getUsers().subscribe((res: UsersDataInterface) => {
      this.users = res.data;
      console.log('this.users: ', this.users);
    });
  }

  deleteUsers(user: UserInterface): void {
    // console.log('usuwam użytkownika: ', user);
    this.usersService.deleteUser(user.id).subscribe((res: any) => {
      // gdyby backend działał, to usuwalibyśmy użytkownika przy pomocy:
      // this.getUsersList();
      // lub:
      // this.users = this.users.filter(user => user.id !== res.id);
      this.users = this.users.filter(userObj => userObj.id !== user.id);
    });
  }

}
