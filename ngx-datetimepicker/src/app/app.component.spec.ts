/* tslint:disable:no-unused-variable */

import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DateComponent } from './date.component/date.component';
import { IsMobileService } from './services/isMobile.service';
import { DateService } from './services/date.service';
import { DatePickerComponent } from './datePicker.component/datePicker.component';
import { TimeComponent } from './time.component/time.component';
import { DateTimePickerComponent } from './dateTimePicker.component/dateTimePicker.component';
import { TimePickerComponent } from './timePicker.component/timePicker.component';

@Directive({ selector: '[ngModel]' })
export class ngModelMock {
	@Input() ngModel;
	@Output() ngModelChange = new EventEmitter();
}

describe('AppComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				DateComponent,
				DatePickerComponent,
				TimeComponent,
				DateTimePickerComponent,
				TimePickerComponent,
				ngModelMock
			],
			providers: [
				IsMobileService,
				DateService
			]
		});
		TestBed.compileComponents();
	});

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));



});
