import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ngx-timepicker',
	template: require('./timePicker.component.html')
})

export class TimePickerComponent implements OnInit {

	public selectedHour: number;
	public selectedMinute: number;

	constructor() { }

	ngOnInit() { }
}