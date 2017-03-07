import { DateComponent } from './date.component';

import { DateService } from '../services/date.service';

describe('a date component', () => {
	let dateComponent: DateComponent;
	let mockDateService: any;


	// register all needed dependencies
	beforeEach(() => {
		mockDateService = jasmine.createSpyObj('mockDateService', ['getDateList', 'getMonths', 'getAvailableYears']);

		mockDateService.getDateList.and.returnValue([]);

		dateComponent = new DateComponent(mockDateService);
	});

	it('should have an instance', () => {
		expect(dateComponent).toBeTruthy();
	});

	it('should set the selected date to today when no date is set', () => {
		dateComponent.ngOnInit();

		expect(dateComponent.selectedMonth).toEqual(new Date().getMonth() + 1);
		expect(dateComponent.selectedDay).toEqual(new Date().getDate());
		expect(dateComponent.selectedYear).toEqual(new Date().getFullYear());
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
		expect(mockDateService.getDateList).toHaveBeenCalled();
	});

	it('should change the selected date to 2/24/2007', () => {
		dateComponent.selectedDate = new Date('2/23/2007');
		expect(dateComponent.selectedMonth).toEqual(2);

		dateComponent.selectedDay = 24;

		expect(dateComponent.selectedDate).toEqual(new Date('2/24/2007'));
		expect(dateComponent.selectedDay).toEqual(24);
		expect(mockDateService.getDateList).toHaveBeenCalledTimes(0);
	});


	it('should change the selected date to 2/23/2017', () => {
		dateComponent.selectedDate = new Date('2/23/2007');
		expect(dateComponent.selectedMonth).toEqual(2);

		dateComponent.selectedYear = 2017;

		expect(dateComponent.selectedDate).toEqual(new Date('2/23/2017'));
		expect(dateComponent.selectedYear).toEqual(2017);
		expect(mockDateService.getDateList).toHaveBeenCalled();
	});

	it('should change the selected date to 3/3/2017 and reload the available days', () => {
		dateComponent.selectedDate = new Date('2/23/2007');

		expect(dateComponent.selectedMonth).toEqual(2);

		dateComponent.setSelectedDate(new Date('3/3/2017'));

		expect(dateComponent.selectedMonth).toEqual(3);
		expect(dateComponent.selectedDay).toEqual(3);
		expect(dateComponent.selectedYear).toEqual(2017);
		expect(mockDateService.getDateList).toHaveBeenCalled();
	});

	it('should toggle the month selection menu', () => {
		dateComponent.toggleMonthMenu();

		expect(dateComponent.showMonthSelection).toBe(true);

		dateComponent.toggleMonthMenu();

		expect(dateComponent.showMonthSelection).toBe(false);
	});

	it('should toggle the year selection menu', () => {
		dateComponent.toggleYearMenu();

		expect(dateComponent.showYearSelection).toBe(true);

		dateComponent.toggleYearMenu();

		expect(dateComponent.showYearSelection).toBe(false);
	});

	it('should tell the picker to hide when closed', () => {
		dateComponent.closeDatePicker.subscribe(visiblility => {
			expect(visiblility).toBe(false);
		})
		dateComponent.closePicker();
	});

	describe('time component', () => {
		it('should change the selected time to 8pm', (done) => {
			dateComponent.ngOnInit();

			dateComponent.selectedDateChange.subscribe((selectedDate:Date) => {
				expect(selectedDate.getHours()).toBe(8);
				done();
			});

			dateComponent.setSelectedDate(dateComponent.highlightedDate,8);

		});

		it('should change the selected time to 45 mins', (done) => {
			dateComponent.ngOnInit();

			dateComponent.selectedDateChange.subscribe((selectedDate:Date) => {
				expect(selectedDate.getMinutes()).toBe(45);
				done();
			});

			dateComponent.setSelectedDate(dateComponent.highlightedDate,null,45);
		});

	});
});