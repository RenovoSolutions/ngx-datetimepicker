import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, HostListener, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IsMobileService } from '../services/isMobile.service';
import { DateService, dayOfTheMonth } from '../services/date.service';

@Component({
	selector: 'ngx-datetime-picker',
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
	@Input() selectedDateTime: Date;
	@Input() placeholder: string;
    @Input() disableInput: boolean = false;
    @Input() disableButton: boolean = false;
    @Input() disablePicker: boolean = false;

	@Output() selectedDateTimeChange = new EventEmitter<Date>();

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
