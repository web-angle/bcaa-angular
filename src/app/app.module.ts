import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { DisplayOrderComponent } from './display-order/display-order.component';
import { NewComponent } from './new/new.component';
import { CompletedComponent } from './completed/completed.component';
import { UpdatedComponent } from './updated/updated.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayOrderComponent,
    NewComponent,
    CompletedComponent,
    UpdatedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
