import { DatePickerComponent } from './datePicker.component';

describe('a input component', () => {
	let datePickerComponent: DatePickerComponent;
	let mockDateService: any;


	// register all needed dependencies
	beforeEach(() => {
		mockDateService = jasmine.createSpyObj('mockDateService', ['getDateList', 'getMonths', 'getAvailableYears']);

		mockDateService.getDateList.and.returnValue([]);
		datePickerComponent = new DatePickerComponent(<any>{}, mockDateService, <any>{});
	});

	it('should have an instance', () => {
		expect(datePickerComponent).toBeTruthy();
	});
	it('should hide the picker', () => {
		let visibility = false;

		datePickerComponent.closePicker(visibility);

		expect(datePickerComponent.pickerVisible).toBe(false);
	});

});