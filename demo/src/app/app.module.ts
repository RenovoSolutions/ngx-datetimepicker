import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {DateService, DateTimePickerModule} from 'ngx-datetime-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DateTimePickerModule
  ],
  providers: [
    DateService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
