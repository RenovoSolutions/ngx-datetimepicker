import { Component, OnInit } from '@angular/core';
import { isMobile } from '../services/isMobile.service';
import { DateService, dayOfTheMonth } from '../services/date.service';

@Component({
	selector: 'ngx-timepicker',
	template: require('./timePicker.component.html')
})

export class TimePickerComponent implements OnInit {

	get formattedTime(): string {
		return this.dateService.formatHHMM_AMPM(this.selectedHour, this.selectedMinute);
	}
	public selectedHour: number;
	public selectedMinute: number;

	constructor(public isMobile: isMobile, public dateService: DateService) { }

	ngOnInit() {
		if (this.selectedHour == null) {
			this.selectedHour = 12;
		}

		if (this.selectedMinute == null) {
			this.selectedMinute == 0;
		}
	}
}