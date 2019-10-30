import {Component, ViewEncapsulation, EventEmitter, Input, Output, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {IsMobileService} from '../../services/isMobile.service';
import {DateService} from '../../services/date.service';

@Component({
  selector:    'ngx-time-picker',
  templateUrl: './timePicker.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimePickerComponent),
      multi: true,
    },
  ],
})
export class TimePickerComponent implements ControlValueAccessor {
	@Input() selectedTime:string;
	@Input() placeholder:string;
    @Input() disableInput:boolean = false;
    @Input() disableButton:boolean = false;
    @Input() disablePicker: boolean = false;
	@Input() use24HourClock:boolean = false;

	@Output() selectedTimeChange:EventEmitter<string>;

	public pickerVisible:boolean = false;
	public isMobile:boolean;

	get formattedTime():string {
	  if (this.selectedTime == null) {
	  	return '';
	  }

	  this.selectedHour = parseInt(this.selectedTime.split(':')[0]);
	  this.selectedMinute = parseInt(this.selectedTime.split(':')[1]);

	  if (this.use24HourClock) {
	  	return this.dateService.formatHHMM(this.selectedHour, this.selectedMinute);
	  }

	  return this.dateService.formatHHMM_AMPM(this.selectedHour, this.selectedMinute);
	}

	get mobileFormattedTime():string {
	  if (this.selectedTime == null) {
	  	return '';
	  }

	  this.selectedHour = parseInt(this.selectedTime.split(':')[0]);
	  this.selectedMinute = parseInt(this.selectedTime.split(':')[1]);

	  return `${(this.selectedHour < 10 ? '0' + this.selectedHour : this.selectedHour)}:${(this.selectedMinute < 10 ? '0' + this.selectedMinute : this.selectedMinute)}`
	}

	set mobileFormattedTime(value:string) {
	  const hour = value.split(':')[0];
	  const minute = value.split(':')[1];

	  if (parseInt(hour)) {
        this.selectedHour = parseInt(hour);
	  } else {
	  	this.selectedHour = 0;
	  }

	  if (parseInt(minute)) {
	  	this.selectedMinute = parseInt(minute);
	  } else {
	  	this.selectedMinute = 0;
	  }

	  this.selectedTime = `${hour}:${minute} ${parseInt(hour) > 11 ? 'am' : 'pm'}`
	}
	public selectedHour: number;
	public selectedMinute: number;

	constructor(
	  private isMobileService:IsMobileService,
      private dateService:DateService
    ) {
	  this.selectedTimeChange = new EventEmitter<string>();

	  this.isMobile = isMobileService.isMobile;
	  this.placeholder = this.placeholder || '';
	}

  writeValue(value:string):void {
    this.selectedTime = value;
  }

  registerOnChange(handler):void {
    this.selectedTimeChange.subscribe(handler);
  }

  registerOnTouched():void {

  }

  setMobileFormattedTime(time:string) {
    this.selectedTimeChange.emit(time);
    this.selectedTime = time;
  }

  setFormattedTime(formattedTime:string) {
    this.selectedTime = formattedTime;
    this.selectedTimeChange.emit(formattedTime);
  }

  setTimeToNow():void {
    const now = new Date();

    this.selectedTime = `${now.getHours()}:${now.getMinutes()} ${(now.getHours() > 11 ? 'am' : 'pm')}`;
    this.selectedTimeChange.emit(this.selectedTime);
    this.selectedHour = now.getHours();
    this.selectedMinute = now.getMinutes();
  }

  setHourNow(hour:any):void {
    if (this.selectedTime == null || this.selectedTime === '') {
      this.selectedTime = `${hour}:00 ${hour > 11 ? 'am' : 'pm'}`
    } else {
      const prevMinute = parseInt(this.selectedTime.split(':')[1]);

      this.selectedTime = `${hour}:${prevMinute} ${hour > 11 ? 'am' : 'pm'}`
    }
    this.selectedTimeChange.emit(this.selectedTime);
  }

  setMinuteNow(minute:any):void {
    if (this.selectedTime == null || this.selectedTime === '') {
      this.selectedTime = `00:${minute} am`
    } else {
      const prevHour = parseInt(this.selectedTime.split(':')[0]);

      this.selectedTime = `${prevHour}:${minute} ${prevHour > 11 ? 'am' : 'pm'}`
    }
    this.selectedTimeChange.emit(this.selectedTime);
  }

  closePicker(close:boolean):void {
    this.pickerVisible = close;
  }
}
