import { Injectable } from '@angular/core';

export interface dayOfTheMonth {
	day: number;
	dayOfTheWeek: number;
	month: number;
}

@Injectable()
export class DateService {

	constructor() { }

	getDateList(Month: number, Year: number): Array<dayOfTheMonth> {
		let dayOfTheMonth = new Date(Month + '/1/' + Year);
		let nextMonth = new Date(Month + '/1/' + Year);

		let returnedDays: dayOfTheMonth[] = [];

		nextMonth.setMonth(nextMonth.getMonth() + 1);

		while (dayOfTheMonth.getMonth() != nextMonth.getMonth()) {
			returnedDays.push({
				day: dayOfTheMonth.getDate(),
				dayOfTheWeek: dayOfTheMonth.getDay(),
				month: dayOfTheMonth.getMonth() + 1
			});
			dayOfTheMonth.setDate(dayOfTheMonth.getDate() + 1);
		}
		return [...this.getPreviousMonthDays(Month, Year),
		...returnedDays,
		...this.getNextMonthDays(Month, Year)];
	}


	getPreviousMonthDays(Month: number, Year: number): Array<dayOfTheMonth> {
		let currentMonth = new Date(Month + '/1/' + Year);
		let returnedDays: dayOfTheMonth[] = [];

		let dayOfTheWeek = currentMonth.getDay();
		let day = currentMonth;

		while (dayOfTheWeek != 0) {
			day.setDate(day.getDate() - 1);
			returnedDays = [{
				day: day.getDate(),
				dayOfTheWeek: day.getDay(),
				month: day.getMonth() + 1

			}, ...returnedDays];
			dayOfTheWeek = day.getDay();
		}

		return returnedDays;
	}

	getNextMonthDays(Month: number, Year: number): Array<dayOfTheMonth> {
		let currentMonth = new Date(Month + '/1/' + Year);
		currentMonth.setMonth(currentMonth.getMonth() + 1);
		currentMonth.setDate(currentMonth.getDate() - 1);

		let returnedDays: dayOfTheMonth[] = [];

		let dayOfTheWeek = currentMonth.getDay();
		let day = currentMonth;

		while (dayOfTheWeek != 6) {
			day.setDate(day.getDate() + 1);

			returnedDays = [...returnedDays, {
				day: day.getDate(),
				dayOfTheWeek: day.getDay(),
				month: day.getMonth() + 1
			}];
			dayOfTheWeek = day.getDay();
		}

		return returnedDays;
	}


	getMonthText(date: Date): string{
		const monthTextList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		return monthTextList[date.getMonth()];
	}
}