import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './views/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './views/components/components.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ComponentsModule],
  declarations: [AppComponent, ProductsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
