import { DatePickerComponent } from './datePicker.component';
import { beforeEach, describe, expect, it } from '@angular/core/testing/src/testing_internal';

describe('a input component', () => {
	let datePickerComponent: DatePickerComponent;
	let mockDateService: any;
	let renderer: any;


	// register all needed dependencies
	beforeEach(() => {
        // @ts-ignore
        mockDateService = jasmine.createSpyObj('mockDateService', ['getDateList', 'getMonths', 'getAvailableYears']);
        // @ts-ignore
        renderer = jasmine.createSpyObj('renderer', ['invokeElementMethod']);

		mockDateService.getDateList.and.returnValue([]);
		datePickerComponent = new DatePickerComponent(<any>{}, mockDateService, <any>{}, renderer);
	});

	it('should have an instance', () => {
		expect(datePickerComponent).toBeTruthy();
	});
	it('should hide the picker', () => {
		let visibility = false;

		datePickerComponent.closePicker(visibility);

		expect(datePickerComponent.pickerVisible).toBe(false);
	});

	it('should focus the input element', () => {
		let nativeInput = {};
		datePickerComponent.input = { nativeElement: nativeInput } as any;

		datePickerComponent.focus();

		expect(renderer.invokeElementMethod).toHaveBeenCalledTimes(1);
		expect(renderer.invokeElementMethod).toHaveBeenCalledWith(nativeInput, 'focus', []);
	});

});