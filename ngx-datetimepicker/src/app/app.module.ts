import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, ValueProvider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DateComponent } from './date.component/date.component';
import { DatePickerComponent } from './datePicker.component/datePicker.component';

import { IS_MOBILE_PROVIDER } from './services/isMobile.service';
import { DateService } from './services/date.service';


@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    IS_MOBILE_PROVIDER,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
