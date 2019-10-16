import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

import {DateService} from './services/date.service';

import {DateTimePickerModule} from './datetimepicker.module';
import {Renderer} from './services/renderer.service';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
        HttpClientModule,
		DateTimePickerModule
	],
	providers: [
		DateService,
        Renderer
	],
	bootstrap: [
	    AppComponent
    ]
})
export class AppModule { }
