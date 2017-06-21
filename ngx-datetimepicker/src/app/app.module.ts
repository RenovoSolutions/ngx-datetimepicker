import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, ValueProvider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DateService } from './services/date.service';

import { DateTimePickerModule } from './datetimepicker.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		DateTimePickerModule
	],
	providers: [
		DateService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
