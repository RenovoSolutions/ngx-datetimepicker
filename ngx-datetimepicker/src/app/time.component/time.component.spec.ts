import { TimeComponent } from './time.component';

describe('a time component', () => {
	let timeComponent: TimeComponent;

	// register all needed dependencies
	beforeEach(() => {
		timeComponent = new TimeComponent();
	});

	it('should have an instance', () => {
		expect(timeComponent).toBeTruthy();
	});

	it('should change the hour to 0  when setting the clock to am and the time is 12 pm', () => {
		timeComponent.selectedHour = 12;
		timeComponent.selectedMinute = 0;

		timeComponent.selectClockChange('am');

		expect(timeComponent.selectedHour).toBe(0);
		expect(timeComponent.formatSelectedHour).toBe('12');

	});

	it('should change the hour appropriately and the formatted hour', () => {
		timeComponent.selectedHour = 0;
		timeComponent.selectedMinute = 0;

		timeComponent.selectClockChange('pm');

		expect(timeComponent.selectedHour).toBe(12);
		expect(timeComponent.formatSelectedHour).toBe('12');

		timeComponent.selectClockChange('am');

		expect(timeComponent.selectedHour).toBe(0);
		expect(timeComponent.formatSelectedHour).toBe('12');

	});

	it('should toggle the hour selection menu', () => {
		timeComponent.toggleHourMenu();

		expect(timeComponent.hoursOpen).toBe(true);

		timeComponent.toggleHourMenu();

		expect(timeComponent.hoursOpen).toBe(false);
	});

	it('should toggle the minute selection menu', () => {
		timeComponent.toggleMinuteMenu();

		expect(timeComponent.minutesOpen).toBe(true);

		timeComponent.toggleMinuteMenu();

		expect(timeComponent.minutesOpen).toBe(false);
	});
});