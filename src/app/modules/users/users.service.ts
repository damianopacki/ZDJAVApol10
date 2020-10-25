import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): string[] {
    return ['Bartek', 'Dmytro', 'Jakub', 'Karolina', 'Łukasza', 'Maja', 'MarcinaM', 'Mateusz', 'Piotr'];
  }
}
