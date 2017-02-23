import { DateComponent } from './date.component';

describe('a date component', () => {
	let dateComponent : DateComponent;

	// register all needed dependencies
	beforeEach(() => {
		dateComponent = new DateComponent(<any>{});
	});

	it('should have an instance', () => {
		expect(dateComponent).toBeTruthy();
	});

	it('should set the selected date to today when no date is set', () => {
		expect(dateComponent.selectedDate).toEqual(new Date());
	});


	it('should set the selected date to 2/23/2007 and get individual days/month/year. ', () => {
		dateComponent.selectedDate = new Date('2/23/2007');

		expect(dateComponent.selectedMonth).toEqual(2);
		expect(dateComponent.selectedDay).toEqual(23);
		expect(dateComponent.selectedYear).toEqual(2007);
	});

	it('should change the selected date to 3/23/2007', () => {
		dateComponent.selectedDate = new Date('2/23/2007');
		expect(dateComponent.selectedMonth).toEqual(2);

		dateComponent.selectedMonth = 3;

		expect(dateComponent.selectedDate).toEqual(new Date('3/23/2007'));
		expect(dateComponent.selectedMonth).toEqual(3);
	});

	it('should change the selected date to 2/24/2007', () => {
		dateComponent.selectedDate = new Date('2/23/2007');
		expect(dateComponent.selectedMonth).toEqual(2);

		dateComponent.selectedDay = 24;

		expect(dateComponent.selectedDate).toEqual(new Date('2/24/2007'));
		expect(dateComponent.selectedDay).toEqual(24);
	});


	it('should change the selected date to 2/23/2017', () => {
		dateComponent.selectedDate = new Date('2/23/2007');
		expect(dateComponent.selectedMonth).toEqual(2);

		dateComponent.selectedYear = 2017;

		expect(dateComponent.selectedDate).toEqual(new Date('2/23/2017'));
		expect(dateComponent.selectedYear).toEqual(2017);
	});
});