import { TimePickerComponent } from './timePicker.component';

describe('a timePicker component', () => {
	let timePickerComponent : TimePickerComponent;

	// register all needed dependencies
	beforeEach(() => {
		timePickerComponent = new TimePickerComponent();
	});

	it('should have an instance', () => {
		expect(timePickerComponent).toBeTruthy();
	});
});