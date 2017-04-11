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

	public selectedClock: string;

	public hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
	public minutes = ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']

	public minutesOpen: boolean;
	public hoursOpen: boolean;

	get formatSelectedMinute(): string {
		return <string>(this.selectedMinute <= 9 ? '0' + this.selectedMinute : this.selectedMinute)
	}

	get formatSelectedHour(): string {
		if (this.selectedHour == 12 || this.selectedHour == 0) {
			return '12';
		}
		return <any>( this.selectedHour > 12 ? this.selectedHour - 12 : this.selectedHour);
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
	}

	selectHourChange(hour: number): void {
		hour = this.selectedClock == 'pm' ? parseInt(<any>hour) + 12 : hour ;
		this.selectedHourChange.emit(hour);
		this.selectedHour = hour;
		//if there isnt' a minute selected defautl to 0
		if (this.selectedMinute == null) {
			this.selectMinuteChange(0);
		}

		this.minutesOpen = false;
		this.hoursOpen = false;
	}

	selectMinuteChange(minute: number): void {
		this.selectedMinuteChange.emit(minute);
		this.selectedMinute = minute;

		this.minutesOpen = false;
		this.hoursOpen = false;
	}

	selectClockChange(clock: string): void {
		if (this.selectedClock != clock) {
			this.selectedClock = clock;
			let hour = 0;
			hour = this.selectedClock == 'pm' ? parseInt(<any>this.selectedHour) + 12 : this.selectedHour - 12;

			this.selectedHour = hour;
			this.selectedHourChange.emit(hour);
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