import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isMobile } from '../services/isMobile.service';
import { DateService, dayOfTheMonth } from '../services/date.service';

@Component({
	selector: 'ngx-datepicker',
	template: require('./datePicker.component.html')
})

export class DatePickerComponent implements OnInit {
    @Input() selectedDate: Date;
    @Output() selectedDateChange = new EventEmitter<Date>();

	get formattedDate(){
        return this.dateService.formateMMDDYYYY(this.selectedDate);
	}

	constructor(public isMobile: isMobile, public dateService: DateService) { }

	ngOnInit() {
        //If no date is selected then default to today's date.
        if (!this.selectedDate) {
            this.selectedDate = new Date();
        }
        if (typeof this.selectedDate == 'string') {
            this.selectedDate = new Date(this.selectedDate);
        }
	}

}