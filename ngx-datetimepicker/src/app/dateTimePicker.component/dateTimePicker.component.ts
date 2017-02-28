import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isMobile } from '../services/isMobile.service';
import { DateService, dayOfTheMonth } from '../services/date.service';

@Component({
	selector: 'ngx-datetimepicker',
	template: require('./datetimepicker.component.html')
})

export class DateTimePickerComponent implements OnInit {
    @Input() selectedDateTime: Date;
    @Output() selectedDateTimeChange = new EventEmitter<Date>();

	get formattedDate(){
        return this.dateService.formatMMDDYYYY_HHMM_AMPM(this.selectedDateTime);
	}

    set formattedDate(value: string) {
        this.selectedDateTime = new Date(value);
    }
	constructor(public isMobile: isMobile, public dateService: DateService) { }

	ngOnInit() {
        //If no date is selected then default to today's date.
        if (!this.selectedDateTime) {
            this.selectedDateTime = new Date();
            this.selectedDateTime.setHours(12, 0);
        }
        if (typeof this.selectedDateTime == 'string') {
            this.selectedDateTime = new Date(this.selectedDateTime);
        }
    }

    newDatePicked(date: Date): void {
        this.selectedDateTimeChange.emit(date);
        this.selectedDateTime = date;
    }
}