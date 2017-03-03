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

	it('should set the selected date to today when no date is set', () => {
		dateTimePickerComponent.ngOnInit();

		expect(dateTimePickerComponent.selectedDateTime.getDate()).toEqual(new Date().getDate());
		expect(dateTimePickerComponent.selectedDateTime.getMonth()).toEqual(new Date().getMonth());
		expect(dateTimePickerComponent.selectedDateTime.getFullYear()).toEqual(new Date().getFullYear());
		expect(dateTimePickerComponent.selectedDateTime.getHours()).toEqual(12);
		expect(dateTimePickerComponent.selectedDateTime.getMinutes()).toEqual(0);
	});

});