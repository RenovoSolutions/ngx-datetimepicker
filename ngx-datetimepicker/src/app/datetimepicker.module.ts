import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  DateComponent } from './date.component/date.component';
import { DatePickerComponent } from './datePicker.component/datePicker.component';

import { DateService } from './services/date.service';
import { IS_MOBILE_PROVIDER } from './services/isMobile.service';

@NgModule({
	imports: [CommonModule],
	exports: [DatePickerComponent],
	declarations: [DateComponent, DatePickerComponent],
	providers: [DateService, IS_MOBILE_PROVIDER],
})
export class DateTimePickerModule { }
