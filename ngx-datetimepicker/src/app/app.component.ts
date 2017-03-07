import { Component, Inject } from '@angular/core';


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

	public dateTimeExample = null
	public dateExample = null
	public timeExample = null

	constructor() {
	};

	setToNow(): void{
		this.dateExample = new Date();
		this.timeExample = `${this.dateExample.getHours()}:${this.dateExample.getMinutes()} ${(this.dateExample.getHours() > 11 ? 'am' : 'pm')}`;
		this.dateTimeExample = new Date();
	}
}
