import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, HostListener, ElementRef } from '@angular/core';
import { IsMobileService } from '../services/isMobile.service';
import { DateService, dayOfTheMonth } from '../services/date.service';

@Component({
    selector: 'ngx-datetimepicker',
    templateUrl: './datetimepicker.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../assets/date-picker.css']
})

export class DateTimePickerComponent implements OnInit {
    @Input() selectedDateTime: Date;
    @Output() selectedDateTimeChange = new EventEmitter<Date>();

    @HostListener('document:click', ['$event'])
    offClick(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.pickerVisible = false;
        }
    }

    pickerVisible: boolean = false;
    isMobile: boolean;

    get formattedDate() {
        return this.dateService.formatMMDDYYYY_HHMM_AMPM(this.selectedDateTime);
    }

    set formattedDate(value: string) {
        this.selectedDateTime = new Date(value);
    }
    constructor(private isMobileService: IsMobileService, public dateService: DateService, private eRef: ElementRef) {
        this.isMobile = isMobileService.isMobile;
    }

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

    closePicker(close: boolean): void {
        this.pickerVisible = close;
    }
}