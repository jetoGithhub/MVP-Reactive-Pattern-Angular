import { Component, OnInit } from '@angular/core';
import { UsersPresenter } from './users.presenter';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersPresenter],
})
export class UsersComponent implements OnInit {
  constructor(public presenter: UsersPresenter) {}

  ngOnInit() {}
}
