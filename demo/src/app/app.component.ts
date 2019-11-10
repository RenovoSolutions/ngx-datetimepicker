import {Component} from '@angular/core';

import {DateService} from 'ngx-datetime-picker';

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

  constructor(
    private dateService: DateService
  ) { }

  setToNow(): void {
    this.dateExample = new Date();
    this.timeExample = this.dateService.formatHHMM_AMPM(this.dateExample.getHours(), this.dateExample.getMinutes());
    this.dateTimeExample = new Date();
  }
}
