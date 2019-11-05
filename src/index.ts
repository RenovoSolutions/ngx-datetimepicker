import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateComponent } from './components/date/date.component';
import { DatePickerComponent } from './components/datePicker/datePicker.component';
import { TimeComponent } from './components/time/time.component';
import { DateTimePickerComponent } from './components/dateTimePicker/dateTimePicker.component';
import { TimePickerComponent } from './components/timePicker/timePicker.component';

export * from './components/datePicker/datePicker.component';
export * from './components/dateTimePicker/dateTimePicker.component';
export * from './components/timePicker/timePicker.component';

import { DateService } from './services/date.service';
import { IsMobileService } from './services/isMobile.service';
import { Renderer } from './services/renderer.service';

@NgModule({
    declarations: [
        TimeComponent,
        DateComponent,
        DatePickerComponent,
        DateTimePickerComponent,
        TimePickerComponent
    ],
    exports: [
        DatePickerComponent,
        DateTimePickerComponent,
        TimePickerComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        DateService,
        IsMobileService,
        Renderer
    ],
})
export class DateTimePickerModule {
    static forRoot():ModuleWithProviders {
        return {
            ngModule: DateTimePickerModule,
            providers: []
        };
    }
}
