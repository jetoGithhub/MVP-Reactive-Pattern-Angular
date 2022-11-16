import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../core/domain/user.model';
import { product1 } from '../../../core/imges';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input()
  users: User[];
  img = product1;
  constructor() {}

  ngOnInit() {}
}
