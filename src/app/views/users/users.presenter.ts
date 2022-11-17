import { Injectable } from '@angular/core';
import { BehaviorSubject, map, delay } from 'rxjs';
import { User } from '../../core/domain/user.model';
import { ViewState } from '../../core/view-state.domain';
import { UserRepository } from '../../models/user/user.repository';

const defaultState: ViewState<User[]> = { state: 'loading' };

@Injectable()
export class UsersPresenter {
  private viewState = new BehaviorSubject<ViewState<User[]>>(defaultState);
  readonly viewState$ = this.viewState.asObservable();

  constructor(private users: UserRepository) {}

  initialize() {
    this.getUsers();
  }

  private getUsers() {
    this.users
      .findAll()
      .pipe(
        delay(1000),
        map((users: User[]) => {
          this.viewState.next({
            state: 'loaded',
            payload: users,
          });
        })
      )
      .subscribe();
  }
}
