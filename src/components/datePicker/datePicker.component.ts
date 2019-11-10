import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    ElementRef,
    forwardRef,
    ViewChild,
    HostListener
} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {IsMobileService} from '../../services/isMobile.service';
import {DateService} from '../../services/date.service';
import {StyleObject} from '../../models/styleObject.model';
import {Renderer} from '../../services/renderer.service';

@Component({
	selector: 'ngx-date-picker',
	templateUrl: './datePicker.component.html',
	encapsulation: ViewEncapsulation.None,
    providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => DatePickerComponent),
			multi: true,
		},
	]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {
    @Input() selectedDate: Date;
    @Input() min: string;
    @Input() max: string;
    @Input() placeholder: string;
    @Input() inputTabIndex: number;
    @Input() disableInput: boolean = false;
    @Input() disableButton: boolean = false;
    @Input() disablePicker: boolean = false;
    @Input() doNotCloseOnDateSet: boolean = false;
    @Input() styles: StyleObject = new StyleObject();

    @Output() selectedDateChange = new EventEmitter<Date>();

    @ViewChild('input') input:ElementRef;

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

    constructor(
        private isMobileService: IsMobileService,
        private dateService: DateService,
        private eRef: ElementRef,
        private renderer: Renderer
    ) {
        this.isMobile = isMobileService.isMobile;
        this.placeholder = this.placeholder || '';
    }

    writeValue(value: Date) {
        this.selectedDate = value;
    }

    registerOnChange(handler) {
        this.selectedDateChange.subscribe(handler);
    }

    registerOnTouched() {}

    // for use with the native html5 element. only emit's new valid dates.
    setDate(date: string) {
        this.invalid = !Date.parse(`${date} 00:00:00`);

        if (!this.invalid) {
            // set the time to zero so that values emitted on mobile are the same as on desktop
            this.selectedDate = new Date(`${date} 00:00:00`);
            this.selectedDateChange.emit(this.selectedDate);
        }
    }

    ngOnInit() {
        if (typeof this.selectedDate == 'string') {
            this.selectedDate = new Date(this.selectedDate);
        }
    }

    newDatePicked(date: Date): void {
        this.invalid = false;

        this.selectedDateChange.emit(date);
        this.selectedDate = date;
    }

    setPickerVisible(close: boolean): void {
        this.pickerVisible = close;
    }

    focus():void {
        this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
    }
}
