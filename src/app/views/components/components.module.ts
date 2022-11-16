import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { UserListComponent } from './product-list/users-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent, UserListComponent],
  exports: [LoadingComponent, UserListComponent],
})
export class ComponentsModule {}
