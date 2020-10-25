import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersDataInterface } from './interfaces/users-data.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<UsersDataInterface> {
    // return ['Bartek', 'Dmytro', 'Jakub', 'Karolina', 'Łukasza', 'Maja', 'MarcinaM', 'Mateusz', 'Piotr'];
    return this.http.get<UsersDataInterface>('https://reqres.in/api/users?page=2');
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`https://reqres.in/api/users/${id}`);
  }
}
