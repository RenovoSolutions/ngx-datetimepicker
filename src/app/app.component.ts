import {Component, ViewChild} from '@angular/core';
import {DatePickerComponent} from './datePicker.component/datePicker.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styles: [`
		hr{
			margin:25px 0;
		}
	`]
})
export class AppComponent {
	title = 'app works!';

	public dateTimeExample = null;
	public dateExample = null;
	public timeExample = null;

	@ViewChild('pickerToFocus') pickerToFocus: DatePickerComponent;

	constructor() {

	};

	setToNow(): void {
		this.dateExample = new Date();
		this.timeExample = `${this.dateExample.getHours()}:${this.dateExample.getMinutes()}`;
		this.dateTimeExample = new Date();
	}

	focusPicker(): void {
		this.pickerToFocus.focus();
	}
}
