import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../../core/domain/user.model';
import { ViewState } from '../../core/view-state.domain';
import { UserRepository } from '../../models/user/user.repository';

const defaultState: ViewState<User[]> = { state: 'loaded' };

@Injectable()
export class UsersPresenter {
  private viewState = new BehaviorSubject<ViewState<User[]>>(defaultState);
  readonly viewState$ = this.viewState.asObservable();

  constructor(private users: UserRepository) {}

  initialize() {
    console.log('users');
    this.users
      .findAll()
      .pipe(
        map((users: User[]) => {
          console.log(users);
          this.viewState.next({
            state: 'loaded',
            payload: users,
          });
        })
      )
      .subscribe();
  }
}
