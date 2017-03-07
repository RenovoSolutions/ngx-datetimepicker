import { TimePickerComponent } from './timePicker.component';

describe('a timePicker component', () => {
	let timePickerComponent: TimePickerComponent;
	let mockDateService: any;
	// register all needed dependencies
	beforeEach(() => {
		mockDateService = jasmine.createSpyObj('mockDateService', ['getDateList', 'getMonths', 'getAvailableYears']);

		mockDateService.getDateList.and.returnValue([]);
		timePickerComponent = new TimePickerComponent(<any>{}, mockDateService, <any>{});
	});

	it('should have an instance', () => {
		expect(timePickerComponent).toBeTruthy();
	});

	it('should set the selected hour and minute accordingly', () => {
		timePickerComponent.mobileFormattedTime = '14:05';

		expect(timePickerComponent.selectedHour).toBe(14);
		expect(timePickerComponent.selectedMinute).toBe(5);
	});

	it('should set the selected hour and minute accordingly', () => {
		timePickerComponent.mobileFormattedTime = '04:15';

		expect(timePickerComponent.selectedHour).toBe(4);
		expect(timePickerComponent.selectedMinute).toBe(15);
	});

	it('should set the selected hour and minute accordingly', () => {
		timePickerComponent.mobileFormattedTime = '';

		expect(timePickerComponent.selectedHour).toBe(0);
		expect(timePickerComponent.selectedMinute).toBe(0);
	});

	it('should set the selected hour and minute to now', () => {
		const now = new Date();

		timePickerComponent.setTimeToNow();

		expect(timePickerComponent.selectedHour).toBe(now.getHours());
		expect(timePickerComponent.selectedMinute).toBe(now.getMinutes());
	});

	it('should hide the picker when closed', () => {
		timePickerComponent.closePicker();

		expect(timePickerComponent.pickerVisible).toBe(false);
	})
});