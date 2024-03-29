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

  findAllUsers() {
    this.users
      .findAll()
      .pipe(
        delay(700),
        map((users: User[]) => {
          this.viewState.next({
            state: 'loaded',
            payload: users.filter((user, index) => index < 5),
          });
        })
      )
      .subscribe();
  }
}
