import { Component } from '@angular/core';
import { DateService } from 'ngx-datetime-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public dateTimeExample = null;
  public dateExample = null;
  public timeExample = null;

  title = 'ngx-datetime-picker';

  constructor(private dateService: DateService) { }

  setToNow(): void {
    const now = new Date();

    this.dateExample = now;
    this.timeExample = now.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit", hour12: false });
    this.dateTimeExample = now;
  }
}
