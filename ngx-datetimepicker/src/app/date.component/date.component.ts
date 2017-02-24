import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild  } from '@angular/core';

import { isMobile } from '../services/isMobile.service';
import { DateService, dayOfTheMonth } from '../services/date.service';

@Component({
    selector: 'ngx-date',
    template: require('./date.component.html'),
    styleUrls: ['./date.component.css']
})

export class DateComponent implements OnInit {
    @Input() selectedDate: Date;
    @Output() selectedDateChange = new EventEmitter<Date>();
    @ViewChild('yearSelect') yearSelect: ElementRef;
    @ViewChild('monthSelect') monthSelect: ElementRef;

    public availableDays: dayOfTheMonth[];
    public months: string[];
    public years: number[];

    public highlightedDate:Date;

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
        let newDate = new Date(this.selectedDate);

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

    setSelectedDate(date: Date): void {
        //load calendarMonth will set the selected date;
        this.loadCalendarMonth(date);
        this.selectedDateChange.emit(this.selectedDate);
        this.highlightedDate = this.selectedDate;
    }

    private loadCalendarMonth(date: Date) {
        if(!date){
            date = new Date();
        }

        const shouldReloadCalendar = (this.selectedMonth != (date.getMonth() + 1) || this.selectedYear != date.getFullYear());

        if (shouldReloadCalendar) {
            this.selectedDate = date;
            this.loadAvailableDays();
        }else{
            this.selectedDate = date;
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
        this.highlightedDate = this.selectedDate;
        this.loadAvailableDays();

    }

    private loadAvailableDays(): void {
        this.availableDays = [...this.dateService.getDateList(this.selectedMonth, this.selectedYear)];
    }

    public scrollToYear():void{
        setTimeout(()=>{
            const selectContainer = this.yearSelect.nativeElement;
            const selectedYear = selectContainer.querySelector('.calendar--year__current');
            selectContainer.scrollTop = selectedYear.offsetTop - (selectContainer.clientHeight / 2) - (selectedYear.clientHeight);
        });
    }

    public scrollToMonth():void{
        setTimeout(()=>{
            const selectContainer = this.monthSelect.nativeElement;
            const selectedMonth = selectContainer.querySelector('.calendar--month__current');
            selectContainer.scrollTop = selectedMonth.offsetTop - (selectContainer.clientHeight / 2)- (selectedMonth.clientHeight)  ;
        });
    }

    public previousMonth():void{
        let previousMonth = new Date(this.selectedDate);
        //because javascript sets months based on a 0 index need to jump back 2 to go to the previous month.
        previousMonth.setMonth(this.selectedMonth - 2)
        this.loadCalendarMonth(previousMonth)
    }

    public nextMonth():void{
        let nextMonth = new Date(this.selectedDate);
        /// same as above but since selected month is 1-12 the index is already the next month.
        nextMonth.setMonth(this.selectedMonth)
        this.loadCalendarMonth(nextMonth)
    }
}