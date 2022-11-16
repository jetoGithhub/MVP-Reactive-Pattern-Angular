import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../core/domain/user.model';
import { ViewState } from '../../core/view-state.domain';

const defaultState: ViewState<User[]> = { state: 'loaded' };

@Injectable()
export class UsersPresenter {
  private viewState = new BehaviorSubject<ViewState<User[]>>(defaultState);
  readonly viewState$ = this.viewState.asObservable();

  constructor() {}
}
