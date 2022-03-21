import { DateTimePickerComponent } from './dateTimePicker.component';

describe('a input component', () => {
	let dateTimePickerComponent: DateTimePickerComponent;
	let mockDateService: any;
	let eRef: any;


	// register all needed dependencies
	beforeEach(() => {
		// @ts-ignore
        mockDateService = jasmine.createSpyObj('mockDateService', ['getDateList', 'getMonths', 'getAvailableYears']);

		mockDateService.getDateList.and.returnValue([]);
		dateTimePickerComponent = new DateTimePickerComponent(<any>{}, mockDateService, eRef);
	});

	it('should have an instance', () => {
		expect(dateTimePickerComponent).toBeTruthy();
	});

	it('should hide the picker', () => {
		let visibility = false;

		dateTimePickerComponent.setPickerVisible(visibility);

		expect(dateTimePickerComponent.pickerVisible).toBe(false);
	});

});
