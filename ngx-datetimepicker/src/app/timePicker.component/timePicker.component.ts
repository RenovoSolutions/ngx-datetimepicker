import { Component, OnInit, ViewEncapsulation, HostListener, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { IsMobileService } from '../services/isMobile.service';
import { DateService, dayOfTheMonth } from '../services/date.service';

@Component({
	selector: 'ngx-time-picker',
	templateUrl: './timePicker.component.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['../../assets/date-picker.css']

})

export class TimePickerComponent  {
    @Input() selectedTime: string;
	@Output() selectedimeChange = new EventEmitter<string>();

	@HostListener('document:click', ['$event'])
    offClick(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.pickerVisible = false;
        }
	}

	pickerVisible: boolean = false;
    isMobile: boolean;

	get formattedTime(): string {
		return this.dateService.formatHHMM_AMPM(this.selectedHour, this.selectedMinute);
	}

	get mobileFormattedTime(): string {
		return `${(this.selectedHour < 10 ? '0'+this.selectedHour : this.selectedHour)}:${(this.selectedMinute < 10 ? '0'+this.selectedMinute : this.selectedMinute)}`
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
	}
	public selectedHour: number;
	public selectedMinute: number;

	constructor(private isMobileService: IsMobileService, public dateService: DateService, private eRef: ElementRef) {
        this.isMobile = isMobileService.isMobile;
    }
	setTimeToNow(): void{
		const now = new Date();
		this.selectedHour = now.getHours();
		this.selectedMinute = now.getMinutes();
	}

	closePicker(): void {
		this.pickerVisible = false;
	}
}