import { Component } from '@angular/core';

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
	public dateTimeExample = null
	public dateExample = null
	public timeExample = null

	title = 'ngx-datetime-picker';

	setToNow(): void{
		this.dateExample = new Date();
		this.timeExample = `${this.dateExample.getHours()}:${this.dateExample.getMinutes()} ${(this.dateExample.getHours() > 11 ? 'am' : 'pm')}`;
		this.dateTimeExample = new Date();
	}
}
