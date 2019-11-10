/* tslint:disable:no-unused-variable */

import { DateService } from './date.service';
import { beforeEach, describe, expect, it } from '@angular/core/testing/src/testing_internal';

describe('AppComponent', () => {
	let dateService: DateService;

	beforeEach(() => {
		dateService = new DateService();
	});

	it('Should not be null', () => {
		expect(dateService).toBeTruthy();
	});

	it('Should return count to be 35 when given Feb 2017', () => {
		const response = dateService.getDateList(2, 2017);

		expect(response.length).toBe(35);
		expect(response[0].day).toBe(29);
		expect(response[34].day).toBe(4);

	});

	it('Should return the last 3 days in January 2017 when given Feb 2017', () => {
		const response = dateService.getPreviousMonthDays(2, 2017);

		expect(response.length).toBe(3);
		expect(response[0].day).toBe(29);
		expect(response[0].month).toBe(1);
		expect(response[1].day).toBe(30);
		expect(response[1].month).toBe(1);
		expect(response[2].day).toBe(31);
		expect(response[2].month).toBe(1);
	});

	it('Should return the first 4 days in march when given Feb 2017', () => {
		const response = dateService.getNextMonthDays(2, 2017);

		expect(response.length).toBe(4);

		expect(response[0].day).toBe(1);
		expect(response[0].month).toBe(3);
		expect(response[3].day).toBe(4);
		expect(response[3].month).toBe(3);
	});

	it('should return "May" when givin 5/1/2017', () => {
		expect(dateService.getMonthText(new Date('5/1/2017'))).toEqual('May');
	});

	it('should return 12 months', () => {
		expect(dateService.getMonths().length).toEqual(12);
	});

	it('should return all the days in Feb 2017', () => {
		const response = dateService.getCurrentMonthDays(2, 2017);

		expect(response.length).toBe(28);

		expect(response[0].day).toBe(1);
		expect(response[0].date.toUTCString()).toBe(new Date('2/1/2017').toUTCString());
		expect(response[0].month).toBe(2);
		expect(response[27].day).toBe(28);
		expect(response[27].month).toBe(2);
		expect(response[27].date.toUTCString()).toBe(new Date('2/28/2017').toUTCString());

	});


	it('should return years going back 80 years and forward 10', () => {
		const response = dateService.getAvailableYears();

		expect(response.length).toBe(86);
	});

	it('should format the supplied date to MM/DD/YYYY', () => {
		const formattedDate = dateService.formatMMDDYYYY(new Date('2/23/2017'));

		expect(formattedDate).toBe('2/23/2017');
	});

	it('should format the supplied date to MM/DD/YYYY HH:MM pm', () => {
		const formattedDate = dateService.formatMMDDYYYY_HHMM_AMPM(new Date('2/23/2017 16:45:00'));

		expect(formattedDate).toBe('2/23/2017 4:45 pm');
	});

	it('should format the supplied date to MM/DD/YYYY HH:MM pm', () => {
		const formattedDate = dateService.formatMMDDYYYY_HHMM_AMPM(new Date('2/23/2017 8:45:00'));

		expect(formattedDate).toBe('2/23/2017 8:45 am');
	});

	it('should format the supplied date to MM/DD/YYYY 12:00 pm', () => {
		const formattedDate = dateService.formatMMDDYYYY_HHMM_AMPM(new Date('2/23/2017 12:00:00'));

		expect(formattedDate).toBe('2/23/2017 12:00 pm');
	});

	it('should format the supplied date to MM/DD/YYYY 12:00 pm', () => {
		const formattedDate = dateService.formatMMDDYYYY_HHMM_AMPM(new Date('2/23/2017 0:00:00'));

		expect(formattedDate).toBe('2/23/2017 12:00 am');
	});

	it('should return an empty string when the supplied a string', () => {
		const formattedDate = dateService.formatMMDDYYYY(<any>'warrior cats');

		expect(formattedDate).toBe('');
	});

	it('should return the string value of 2013-10-09T15:38 when supplied that datetime', () => {
		const formattedDate = dateService.formatMobileYYYYMMDDTHHMM(new Date(2013,9,9,15,38));

		expect(formattedDate).toBe('2013-10-09T15:38');
	});

	describe('canSelectYear', () => {
		it('should return false if the year is below the year of the minimum date', () => {
			expect(dateService.canSelectYear(2017, '1/1/2018', null)).toBe(false);
		});

		it('should return false if the year is above the year of the maximum date', () => {
			expect(dateService.canSelectYear(2019, null, '1/1/2018')).toBe(false);
		});

		it('should return true if the year is equal to the year of the minimum date', () => {
			expect(dateService.canSelectYear(2018, '1/1/2018', null)).toBe(true);
		});

		it('should return true if the year is equal to the year of the maximum date', () => {
			expect(dateService.canSelectYear(2018, null, '1/1/2018')).toBe(true);
		});

		it('should return true if there is no min or max date', () => {
			expect(dateService.canSelectYear(2018, null, null)).toBe(true);
		});
	});

	describe('canSelectMonth', () => {
		// dates use 0-based indexing. All month integers are one less than the equivalent value in the min/max string
		it('should return false if the month is below the month of the minimum date', () => {
			expect(dateService.canSelectMonth(4, 2018, '6/1/2018', null)).toBe(false);
		});

		it('should return false if the month is above the month of the maximum date', () => {
			expect(dateService.canSelectMonth(6, 2018, null, '6/1/2018')).toBe(false);
		});

		it('should return true if the month is equal to the month of the minimum date', () => {
			expect(dateService.canSelectMonth(5, 2018, '6/1/2018', null)).toBe(true);
		});

		it('should return true if the month is equal to the month of the maximum date', () => {
			expect(dateService.canSelectMonth(5, 2018, null, '6/1/2018')).toBe(true);
		});

		it('should return true if the year is above the minimum year', () => {
			expect(dateService.canSelectMonth(4, 2019, '6/1/2018', null)).toBe(true);
		});

		it('should return true if the year is below the maximum year', () => {
			expect(dateService.canSelectMonth(6, 2017, null, '6/1/2018')).toBe(true);
		});

		it('should return false if the year is below the minimum year', () => {
			expect(dateService.canSelectMonth(6, 2017, '6/1/2018', null)).toBe(false);
		});

		it('should return false if the year is above the maximum year', () => {
			expect(dateService.canSelectMonth(4, 2019, null, '6/1/2018')).toBe(false);
		});

		it('should return true if there is no min or max date', () => {
			expect(dateService.canSelectMonth(4, 2018, null, null)).toBe(true);
		});
	});

	describe('canSelectDay', () => {
		// dates use 0-based indexing. All month integers are one less than the equivalent value in the min/max string
		it('should return false if the day is below the day of the minimum date', () => {
			expect(dateService.canSelectDay(14, 5, 2018, '6/15/2018', null)).toBe(false);
		});

		it('should return false if the day is above the day of the maximum date', () => {
			expect(dateService.canSelectDay(16, 5, 2018, null, '6/15/2018')).toBe(false);
		});

		it('should return true if the day is equal to the day of the minimum date', () => {
			expect(dateService.canSelectDay(15, 5, 2018, '6/15/2018', null)).toBe(true);
		});

		it('should return true if the day is equal to the day of the maximum date', () => {
			expect(dateService.canSelectDay(15, 5, 2018, null, '6/15/2018')).toBe(true);
		});

		it('should return true if the year is above the minimum year', () => {
			expect(dateService.canSelectDay(14, 5, 2019, '6/15/2018', null)).toBe(true);
		});

		it('should return true if the year is below the maximum year', () => {
			expect(dateService.canSelectDay(16, 5, 2017, null, '6/15/2018')).toBe(true);
		});

		it('should return false if the year is below the minimum year', () => {
			expect(dateService.canSelectDay(16, 5, 2017, '6/15/2018', null)).toBe(false);
		});

		it('should return false if the year is above the maximum year', () => {
			expect(dateService.canSelectDay(14, 5, 2019, null, '6/15/2018')).toBe(false);
		});

		it('should return true if the month is above the minimum month', () => {
			expect(dateService.canSelectDay(14, 6, 2018, '6/15/2018', null)).toBe(true);
		});

		it('should return true if the month is below the maximum month', () => {
			expect(dateService.canSelectDay(16, 4, 2018, null, '6/15/2018')).toBe(true);
		});

		it('should return false if the month is below the minimum month', () => {
			expect(dateService.canSelectDay(16, 4, 2018, '6/15/2018', null)).toBe(false);
		});

		it('should return false if the month is above the maximum month', () => {
			expect(dateService.canSelectDay(14, 6, 2018, null, '6/15/2018')).toBe(false);
		});

		it('should return true if there is no min or max date', () => {
			expect(dateService.canSelectDay(15, 5, 2018, null, null)).toBe(true);
		});
	});
});
