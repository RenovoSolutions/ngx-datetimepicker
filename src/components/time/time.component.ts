import { Component, OnInit, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'ngx-time',
	templateUrl: './time.component.html',
	encapsulation: ViewEncapsulation.None,
})
export class TimeComponent implements OnInit {
	@Input() selectedHour: number;
	@Output() selectedHourChange = new EventEmitter<number>();

	@Input() selectedMinute: number;
	@Output() selectedMinuteChange = new EventEmitter<number>();

	@Input() doNotCloseOnDateSet: boolean = false;
	@Input() use24HourClock: boolean = false;

    @Output() closeDatePicker = new EventEmitter<boolean>();

	public selectedClock: string;

	public hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
	public minutes = ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

	public minutesOpen: boolean;
	public hoursOpen: boolean;

	get formatSelectedMinute():string {
		return this.selectedMinute <= 9 ? '0' + this.selectedMinute : '' + this.selectedMinute;
	}

	get formatSelectedHour():string {
		if (!this.use24HourClock) {
			if (this.selectedHour === 12 || this.selectedHour === 0) {
				return '12';
			}

			return (this.selectedHour > 12 ? this.selectedHour - 12 : this.selectedHour) + '';
		} else {
			return (this.selectedHour < 10 ? '0' + this.selectedHour : this.selectedHour) + '';
		}
	}

	ngOnInit() {
		if (!this.selectedHour) {
			this.selectedHour = 12;
		}
		if (!this.selectedMinute) {
			this.selectedMinute = 0;
		}
		if (this.selectedHour >= 12) {
			this.selectedClock = 'pm';
		}
		if (this.use24HourClock) {
			this.hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
			this.minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
			this.selectedClock = '';
		}
	}

	selectHourChange(selected:string):void {
        let hour = parseInt(selected);
        if (this.use24HourClock) {
            hour = this.selectedClock === 'pm' ? hour + 12 : hour;
        }

		this.selectedHourChange.emit(hour);
		this.selectedHour = hour;

		if (this.selectedMinute == null) {
			this.selectMinuteChange('0');
		}

		this.minutesOpen = false;
		this.hoursOpen = false;
	}

	selectMinuteChange(selected:string):void {
	    const minute = parseInt(selected);

		this.selectedMinuteChange.emit(minute);
		this.selectedMinute = minute;

		this.minutesOpen = false;
		this.hoursOpen = false;
	}

	selectClockChange(clock:string):void {
		if (this.selectedClock !== clock) {
			this.selectedClock = clock;

			if (this.selectedClock === 'pm' && this.selectedHour <= 11) {
                this.selectedHour = this.selectedHour + 12;
            } else if (this.selectedClock === 'am' && this.selectedHour >= 12) {
                this.selectedHour = this.selectedHour - 12;
            }

			this.selectedHourChange.emit(this.selectedHour);
		}
	}

    closePicker():void {
        this.closeDatePicker.emit(true);
    }

    setTimeToNow():void {
        const now = new Date();

        this.selectedHour = now.getHours();
        this.selectedHourChange.emit(this.selectedHour);
        this.selectedMinute = now.getMinutes();
        this.selectedMinuteChange.emit(this.selectedMinute);

        this.selectedClock = this.selectedHour >= 12 ? 'pm' : 'am';

        if (!this.doNotCloseOnDateSet) {
            this.closePicker();
        }
    }

    public toggleHourMenu(): void {
        this.minutesOpen = false;
        this.hoursOpen = !this.hoursOpen;
    }

    public toggleMinuteMenu(): void {
        this.hoursOpen = false;
        this.minutesOpen = !this.minutesOpen;
    }
}
