import { TimePickerComponent } from './timePicker.component';

describe('a timePicker component', () => {
	let timePickerComponent: TimePickerComponent;
	let mockDateService: any;
	// register all needed dependencies
	beforeEach(() => {
		mockDateService = jasmine.createSpyObj('mockDateService', ['getDateList', 'getMonths', 'getAvailableYears']);

		mockDateService.getDateList.and.returnValue([]);
		timePickerComponent = new TimePickerComponent(<any>{}, mockDateService);
	});

	it('should have an instance', () => {
		expect(timePickerComponent).toBeTruthy();
	});
});