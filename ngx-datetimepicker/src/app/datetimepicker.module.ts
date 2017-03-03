import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateComponent } from './date.component/date.component';
import { DatePickerComponent } from './datePicker.component/datePicker.component';
import { TimeComponent } from './time.component/time.component';
import { DateTimePickerComponent } from './dateTimePicker.component/dateTimePicker.component';
import { TimePickerComponent } from './timePicker.component/timePicker.component';

import { DateService } from './services/date.service';
import { IsMobileService } from './services/isMobile.service';

@NgModule({
	imports: [CommonModule],
	exports: [DatePickerComponent, DateTimePickerComponent, TimePickerComponent],
	declarations: [ TimeComponent, DateComponent, DatePickerComponent, DateTimePickerComponent, TimePickerComponent ],
	providers: [DateService, IsMobileService],
})
export class DateTimePickerModule { }
