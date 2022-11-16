import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './views/components/components.module';
import { UsersComponent } from './views/users/users.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, UsersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
