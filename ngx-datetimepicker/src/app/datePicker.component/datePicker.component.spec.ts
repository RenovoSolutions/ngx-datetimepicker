import { DatePickerComponent } from './datePicker.component';

describe('a input component', () => {
	let datePickerComponent: DatePickerComponent;
	let mockDateService: any;


	// register all needed dependencies
	beforeEach(() => {
		mockDateService = jasmine.createSpyObj('mockDateService', ['getDateList', 'getMonths', 'getAvailableYears']);

		mockDateService.getDateList.and.returnValue([]);
		datePickerComponent = new DatePickerComponent(<any>{}, mockDateService);
	});

	it('should have an instance', () => {
		expect(datePickerComponent).toBeTruthy();
	});

	it('should set the selected date to today when no date is set', () => {
		datePickerComponent.ngOnInit();

		expect(datePickerComponent.selectedDate.getDate()).toEqual(new Date().getDate());
		expect(datePickerComponent.selectedDate.getMonth()).toEqual(new Date().getMonth());
		expect(datePickerComponent.selectedDate.getFullYear()).toEqual(new Date().getFullYear());
	});

});