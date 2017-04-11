import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';

import { DateService, dayOfTheMonth } from '../services/date.service';

@Component({
    selector: 'ngx-date',
    templateUrl: './date.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class DateComponent implements OnInit {
    @Input() selectedDate: Date;
    @Input() includeTime: boolean;

    @Output() selectedDateChange = new EventEmitter<Date>();
    @Output() closeDatePicker = new EventEmitter<boolean>();

    @ViewChild('yearSelect') yearSelect: ElementRef;
    @ViewChild('monthSelect') monthSelect: ElementRef;

    public availableDays: dayOfTheMonth[];
    public months: string[];
    public years: number[];

    public highlightedDate: Date;

    public selectedHour: number;
    public selectedMinute: number;

    public showMonthSelection: boolean = false;
    public showYearSelection: boolean = false;

    get selectedMonth(): number {
        if (this.selectedDate == null) {
            return new Date().getMonth() + 1;
        }
        return this.selectedDate.getMonth() + 1;
    }

    get selectedDay(): number {
        if (this.selectedDate == null) {
            return new Date().getDate();
        }
        return this.selectedDate.getDate();
    }

    get selectedYear(): number {
        if (this.selectedDate == null) {
            return new Date().getFullYear();
        }
        return this.selectedDate.getFullYear();
    }

    set selectedMonth(month: number) {
        let newDate = new Date(this.selectedDate);

        if (month == null) {
            month = new Date().getMonth();
        }

        newDate.setMonth(month - 1);
        this.loadCalendarMonth(newDate);
    }

    set selectedDay(day: number) {
        let newDate = new Date(this.selectedDate);

        newDate.setDate(day);
        this.loadCalendarMonth(newDate);

    }
    set selectedYear(year: number) {
        let newDate = new Date(this.selectedDate);

        newDate.setFullYear(year);
        this.loadCalendarMonth(newDate);
    }

    get selectedMonthText(): string {
        return this.dateService.getMonthText(this.selectedDate);
    }

    constructor(private dateService: DateService) { }

    setSelectedDate(date: Date, hour?: number, minutes?: number): void {
        if (this.includeTime && !!date && !!this.selectedDate) {
            date.setHours(this.selectedDate.getHours(), this.selectedDate.getMinutes());
        }
        if (!date) {
            date = new Date();
        }

        //load calendarMonth will set the selected date;
        this.loadCalendarMonth(date);

        if (hour != null) {
            this.selectedDate.setHours(hour);
        }

        if (minutes != null) {
            this.selectedDate.setMinutes(minutes);
        }

        this.selectedDateChange.emit(this.selectedDate);
        this.highlightedDate = this.selectedDate;
        this.selectedHour = date.getHours();
        this.selectedMinute = date.getMinutes();

        this.closePicker();
    }

    private loadCalendarMonth(date: Date) {
        if (date == null) {
            date = new Date();
        }
        const shouldReloadCalendar = (this.selectedMonth != (date.getMonth() + 1) || this.selectedYear != date.getFullYear());
        this.selectedDate = date;

        if (shouldReloadCalendar) {
            this.availableDays = [...this.dateService.getDateList(this.selectedMonth, this.selectedYear)];
        }
    }

    ngOnInit() {
        this.months = this.dateService.getMonths();
        this.years = this.dateService.getAvailableYears();

        // subscribing to it's own event emitter to set the selected year position
        this.selectedDateChange.subscribe(date => {
            this.scrollToMonth();
            this.scrollToYear();
        });


        //If no date is selected then default to today's date.
        if (!this.selectedDate) {
            this.selectedDate = new Date();
        }
        if (typeof this.selectedDate == 'string') {
            this.selectedDate = new Date(this.selectedDate);
        }

        if (this.includeTime) {
            this.selectedHour = this.selectedDate.getHours();
        }

        if (this.includeTime) {
            this.selectedMinute = this.selectedDate.getMinutes();
        }
        this.highlightedDate = this.selectedDate;
        this.availableDays = [...this.dateService.getDateList(this.selectedMonth, this.selectedYear)];

    }

    public scrollToYear(): void {
        // setTime out is being used since I need this code to excute next, if not the change won't be visible until the second click
        setTimeout(() => {
            if (this.yearSelect && this.yearSelect.nativeElement) {
                const selectContainer = this.yearSelect.nativeElement;
                const selectedYear = selectContainer.querySelector('.calendar--year__selected');
                selectContainer.scrollTop = selectedYear.offsetTop - (selectContainer.clientHeight / 2) - (selectedYear.clientHeight);
            }
        });
    }

    public scrollToMonth(): void {
        // setTime out is being used since I need this code to excute next, if not the change won't be visible until the second click
        setTimeout(() => {
            if (this.monthSelect && this.monthSelect.nativeElement) {
                const selectContainer = this.monthSelect.nativeElement;
                const selectedMonth = selectContainer.querySelector('.calendar--month__selected');
                selectContainer.scrollTop = selectedMonth.offsetTop - (selectContainer.clientHeight / 2) - (selectedMonth.clientHeight);
            }
        });
    }

    public previousMonth(): void {
        let previousMonth = new Date(this.selectedDate);
        //because javascript sets months based on a 0 index need to jump back 2 to go to the previous month.
        previousMonth.setMonth(this.selectedMonth - 2)
        this.loadCalendarMonth(previousMonth)
    }

    public nextMonth(): void {
        let nextMonth = new Date(this.selectedDate);
        /// same as above but since selected month is 1-12 the index is already the next month.
        nextMonth.setMonth(this.selectedMonth)
        this.loadCalendarMonth(nextMonth)
    }

    public toggleMonthMenu(): void {
        this.scrollToMonth();
        this.showMonthSelection = !this.showMonthSelection;
    }

    public toggleYearMenu(): void {
        this.scrollToYear();
        this.showYearSelection = !this.showYearSelection;
    }

    public closePicker(): void {
        this.closeDatePicker.emit(false);
    }
}