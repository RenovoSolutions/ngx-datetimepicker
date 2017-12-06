import { DatePickerComponent } from './datePicker.component';

describe('a input component', () => {
	let datePickerComponent: DatePickerComponent;
	let mockDateService: any;
	let renderer: any;


	// register all needed dependencies
	beforeEach(() => {
		mockDateService = jasmine.createSpyObj('mockDateService', ['getDateList', 'getMonths', 'getAvailableYears']);
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
		let input = {} as any;
		datePickerComponent.input = input;

		datePickerComponent.focus();

		expect(renderer.invokeElementMethod).toHaveBeenCalledTimes(1);
		expect(renderer.invokeElementMethod).toHaveBeenCalledWith(input, 'focus', []);
	});

});
