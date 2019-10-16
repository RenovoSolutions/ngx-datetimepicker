import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, HostListener, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IsMobileService } from '../services/isMobile.service';
import { DateService } from '../services/date.service';
import { StyleObject } from '../models/styleObject.model';

@Component({
    selector:    'ngx-datetime-picker',
    templateUrl: './dateTimePicker.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateTimePickerComponent),
            multi: true,
        },
    ],
})
export class DateTimePickerComponent implements OnInit, ControlValueAccessor {
    public pickerVisible: boolean = false;
    public isMobile: boolean;
    public invalid: boolean;

    @Input() selectedDateTime: Date;
    @Input() placeholder: string;
    @Input() disableInput: boolean = false;
    @Input() disableButton: boolean = false;
    @Input() disablePicker: boolean = false;
    @Input() doNotCloseOnDateSet: boolean = false;
    @Input() min: string = null;
    @Input() max: string = null;
    @Input() styles: StyleObject = new StyleObject();
    @Input() use24HourClock: boolean = false;

    @Output() selectedDateTimeChange = new EventEmitter<Date>();

    @HostListener('document:click', ['$event'])
    offClick(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.pickerVisible = false;
        }
    }

    get formattedDate() {
        if (this.use24HourClock) {
            return this.dateService.formatMMDDYYYY_HHMM(this.selectedDateTime);
        }
        return this.dateService.formatMMDDYYYY_HHMM_AMPM(this.selectedDateTime);
    }

    get mobileFormattedDate() {
        return this.dateService.formatMobileYYYYMMDDTHHMM(this.selectedDateTime);
    }

    constructor(private isMobileService: IsMobileService, public dateService: DateService, private eRef: ElementRef) {
        this.isMobile = isMobileService.isMobile;
        this.placeholder = this.placeholder || '';

    }

    writeValue(value: Date) {
        this.selectedDateTime = value;
    }

    registerOnChange(handler) {
        this.selectedDateTimeChange.subscribe(handler);
    }

    registerOnTouched() {}

    setDateTime(dateTime: string) {
        const isValid = !!Date.parse(dateTime);
        if (isValid) {
            this.selectedDateTime = new Date(dateTime);
            this.selectedDateTimeChange.emit(this.selectedDateTime);
            this.invalid = false;
        } else {
            this.invalid = true;
        }
    }

    ngOnInit() {
        if (typeof this.selectedDateTime === 'string') {
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
