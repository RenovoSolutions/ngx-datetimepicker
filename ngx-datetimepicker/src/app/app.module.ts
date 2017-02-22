import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, ValueProvider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IS_MOBILE_PROVIDER } from './services/isMobile.service';

import { DateComponent } from './date.component/date.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    IS_MOBILE_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
