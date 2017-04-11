import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, HostListener, ElementRef } from '@angular/core';
import { IsMobileService } from '../services/isMobile.service';
import { DateService, dayOfTheMonth } from '../services/date.service';

@Component({
    selector: 'ngx-date-picker',
    templateUrl: './datePicker.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class DatePickerComponent implements OnInit {
    @Input() selectedDate: Date;
    @Output() selectedDateChange = new EventEmitter<Date>();

    @HostListener('document:click', ['$event'])
    offClick(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.pickerVisible = false;
        }
    }

    pickerVisible: boolean = false;
    isMobile: boolean;
    invalid: boolean;

    get formattedDate() {
        return this.dateService.formatMMDDYYYY(this.selectedDate);
    }

    get mobileFormattedDate() {
        return this.dateService.formatMobileYYYYMMDD(this.selectedDate);
    }

    constructor(private isMobileService: IsMobileService, public dateService: DateService, private eRef: ElementRef) {
        this.isMobile = isMobileService.isMobile;
    }


    // for use with the native html5 element. only emit's new valid dates.
    setDate(date: string) {
        const isValid = !!Date.parse(`${date} 00:00:00`);
        if (isValid) {
            // set the time to zero so that values emitted on mobile are the same as on desktop
            this.selectedDate = new Date(`${date} 00:00:00`);
            this.selectedDateChange.emit(this.selectedDate);
            this.invalid = false;
        } else {
            this.invalid = true;
        }
    }

    ngOnInit() {
        if (typeof this.selectedDate == 'string') {
            this.selectedDate = new Date(this.selectedDate);
        }
    }

    newDatePicked(date: Date): void {
        this.selectedDateChange.emit(date);
        this.selectedDate = date;
    }

    closePicker(close: boolean): void {
        this.pickerVisible = close;
    }
}