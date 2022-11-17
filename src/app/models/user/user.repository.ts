import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiUser } from '../../core/domain/apis-models/api-user.model';
import { User } from '../../core/domain/user.model';
import { UserModel } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserRepository {
  constructor(private http: HttpClient) {}

  findAll(): Observable<User[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users', { observe: 'body' })
      .pipe(
        map((users: ApiUser.BodyResponse[]) => {
          return users
            .filter((user, index) => index < 5)
            .map((user) => new UserModel(user));
        })
      );
  }
}
