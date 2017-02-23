import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { isMobile } from '../services/isMobile.service';
import { DateService, dayOfTheMonth } from '../services/date.service';

@Component({
    selector: 'ngx-date',
    template: require('./date.component.html'),
    styleUrls: ['./date.component.css']
})

export class DateComponent implements OnInit {
    @Input() selectedDate: Date;
    @Output() selectedDateChange: EventEmitter<Date>;

    public availableDays: dayOfTheMonth[];

    get selectedMonth(): number {
        //increment by one since getMonth is zero based
        return this.selectedDate.getMonth() + 1;
    }

    get selectedDay(): number {
        return this.selectedDate.getDate();
    }

    get selectedYear(): number {
        return this.selectedDate.getFullYear();
    }

    set selectedMonth(month: number) {
        this.selectedDate.setMonth(month - 1);
    }

    set selectedDay(day: number) {
        this.selectedDate.setDate(day);
    }
    set selectedYear(year: number) {
        this.selectedDate.setFullYear(year);
    }

    get selectedMonthText(): string{
        return this.dateService.getMonthText(this.selectedDate);
    }

    constructor(private dateService: DateService) { }

    ngOnInit() {
        //If no date is selected then default to today's date.
        if (!this.selectedDate) {
            this.selectedDate = new Date();
        }
        if (typeof this.selectedDate == 'string'){
            this.selectedDate = new Date(this.selectedDate);
        }

        this.availableDays = this.dateService.getDateList(this.selectedMonth, this.selectedYear);

    }

}