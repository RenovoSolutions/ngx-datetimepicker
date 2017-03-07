import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, HostListener, ElementRef } from '@angular/core';
import { IsMobileService } from '../services/isMobile.service';
import { DateService, dayOfTheMonth } from '../services/date.service';

@Component({
    selector: 'ngx-date-picker',
    templateUrl: './datePicker.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../assets/date-picker.css']
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

    get formattedDate() {
        return this.dateService.formatMMDDYYYY(this.selectedDate);
    }

    get mobileFormattedDate() {
        return this.dateService.formatMobileYYYYMMDD(this.selectedDate);
    }

    setMobileFormattedDate(event) {
        this.selectedDate = new Date(event.target.value);
        this.selectedDateChange.emit(this.selectedDate);
    }

    constructor(private isMobileService: IsMobileService, public dateService: DateService, private eRef: ElementRef) {
        this.isMobile = isMobileService.isMobile;
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