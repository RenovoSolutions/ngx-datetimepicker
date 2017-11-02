import { Component, OnInit, ViewEncapsulation, HostListener, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { IsMobileService } from '../services/isMobile.service';
import { DateService, dayOfTheMonth } from '../services/date.service';

@Component({
	selector: 'ngx-time-picker',
	templateUrl: './timePicker.component.html',
	encapsulation: ViewEncapsulation.None,

})

export class TimePickerComponent {
	@Input() selectedTime: string;
	@Input() placeholder: string;

	@Output() selectedTimeChange = new EventEmitter<string>();

	@HostListener('document:click', ['$event'])
	offClick(event) {
		if (!this.eRef.nativeElement.contains(event.target)) {
			this.pickerVisible = false;
		}
	}

	pickerVisible: boolean = false;
	isMobile: boolean;

	get formattedTime(): string {
		if (this.selectedTime == null) {
			return '';
		}
		this.selectedHour = parseInt(this.selectedTime.split(':')[0]);
		this.selectedMinute = parseInt(this.selectedTime.split(':')[1]);
		return this.dateService.formatHHMM_AMPM(this.selectedHour, this.selectedMinute);
	}

	get mobileFormattedTime(): string {
		if (this.selectedTime == null) {
			return '';
		}
		this.selectedHour = parseInt(this.selectedTime.split(':')[0]);
		this.selectedMinute = parseInt(this.selectedTime.split(':')[1]);
		return `${(this.selectedHour < 10 ? '0' + this.selectedHour : this.selectedHour)}:${(this.selectedMinute < 10 ? '0' + this.selectedMinute : this.selectedMinute)}`
	}

	set mobileFormattedTime(value: string) {
		const hour = value.split(':')[0];
		const minute = value.split(':')[1];
		if (parseInt(hour)) {
			this.selectedHour = parseInt(hour);
		} else {
			this.selectedHour = 0;
		}
		if (parseInt(minute)) {
			this.selectedMinute = parseInt(minute);
		} else {
			this.selectedMinute = 0;
		}
		this.selectedTime = `${hour}:${minute} ${parseInt(hour) > 11 ? 'am' : 'pm'}`
	}
	public selectedHour: number;
	public selectedMinute: number;

	constructor(private isMobileService: IsMobileService, public dateService: DateService, private eRef: ElementRef) {
		this.isMobile = isMobileService.isMobile;
		this.placeholder = this.placeholder || '';

	}

	setMobileFormattedTime(time: string) {
		this.selectedTimeChange.emit(time);
		this.selectedTime = time;
	}

	setFormattedTime(formattedTime: string) {
		this.selectedTime = formattedTime;
		this.selectedTimeChange.emit(formattedTime);
	}

	setTimeToNow(): void {
		const now = new Date();
		this.selectedTime = `${now.getHours()}:${now.getMinutes()} ${(now.getHours() > 11 ? 'am' : 'pm')}`;
		this.selectedTimeChange.emit(this.selectedTime);
		this.selectedHour = now.getHours();
		this.selectedMinute = now.getMinutes();
	}

	setHourNow(hour: any) {
		if (this.selectedTime == null || this.selectedTime === '') {
			this.selectedTime = `${hour}:00 ${hour > 11 ? 'am' : 'pm'}`
		} else {
			const prevMinute = parseInt(this.selectedTime.split(':')[1]);
			this.selectedTime = `${hour}:${prevMinute} ${hour > 11 ? 'am' : 'pm'}`
		}
		this.selectedTimeChange.emit(this.selectedTime);
	}

	setMinuteNow(minute: any) {
		if (this.selectedTime == null || this.selectedTime === '') {
			this.selectedTime = `00:${minute} am`
		} else {
			const prevHour = parseInt(this.selectedTime.split(':')[0]);
			this.selectedTime = `${prevHour}:${minute} ${prevHour > 11 ? 'am' : 'pm'}`
		}
		this.selectedTimeChange.emit(this.selectedTime);
	}

	closePicker(): void {
		this.pickerVisible = false;
	}
}