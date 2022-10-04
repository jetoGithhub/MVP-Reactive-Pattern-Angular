import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent, ProductListComponent],
  exports: [LoadingComponent, ProductListComponent],
})
export class ComponentsModule {}
