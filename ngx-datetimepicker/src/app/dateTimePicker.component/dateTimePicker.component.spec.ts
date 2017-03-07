import { DateTimePickerComponent } from './dateTimePicker.component';

describe('a input component', () => {
	let dateTimePickerComponent: DateTimePickerComponent;
	let mockDateService: any;


	// register all needed dependencies
	beforeEach(() => {
		mockDateService = jasmine.createSpyObj('mockDateService', ['getDateList', 'getMonths', 'getAvailableYears']);

		mockDateService.getDateList.and.returnValue([]);
		dateTimePickerComponent = new DateTimePickerComponent(<any>{}, mockDateService, <any>{});
	});

	it('should have an instance', () => {
		expect(dateTimePickerComponent).toBeTruthy();
	});

	it('should hide the picker', () => {
		let visibility = false;

		dateTimePickerComponent.closePicker(visibility);

		expect(dateTimePickerComponent.pickerVisible).toBe(false);
	});

});