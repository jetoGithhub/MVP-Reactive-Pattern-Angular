import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiUserResponse, UserModel } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserRepository {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users', { observe: 'body' })
      .pipe(
        map((users: ApiUserResponse[]) => {
          return users.map((user) => new UserModel(user));
        })
      );
  }
}
