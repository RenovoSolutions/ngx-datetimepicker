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
  title = 'ngx-datetime-picker';
}
