import { Injectable } from '@angular/core';

export interface dayOfTheMonth {
	day: number;
	dayOfTheWeek: number;
	month: number;
	date: Date;
}


@Injectable()
export class DateService {
	private months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	constructor() { }

	formatMMDDYYYY(date: Date): string {
		if (!date || typeof date == 'string') {
			return '';
		}
		return `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`;
	}


	formatMMDDYYYY_HHMM_AMPM(date:Date):string{
		if(!date|| typeof date == 'string'){
			return '';
		}
		const minutes = (!date.getMinutes() ? '00' : (date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes()));
		const hours = date.getHours();

		if (hours > 12) {
			return `${this.formatMMDDYYYY(date)} ${hours -12}:${minutes} pm`;
		}
		if (hours == 12) {
			return `${this.formatMMDDYYYY(date)} ${hours}:${minutes} pm`;
		}

		if (hours == 0) {
			return `${this.formatMMDDYYYY(date)} 12:${minutes} am`;
		}

		return `${this.formatMMDDYYYY(date)} ${hours}:${minutes} am`;
	}

	getCurrentMonthDays(month: number, year: number): dayOfTheMonth[] {
		let dayOfTheMonth = new Date(year,month -1,1);
		let nextMonth = new Date(year,month - 1,1);

		let returnedDays: dayOfTheMonth[] = [];

		nextMonth.setMonth(nextMonth.getMonth() + 1);

		while (dayOfTheMonth.getMonth() != nextMonth.getMonth()) {
			const dayToAdd = {
				day: dayOfTheMonth.getDate(),
				dayOfTheWeek: dayOfTheMonth.getDay(),
				month: dayOfTheMonth.getMonth() + 1,
				date: new Date((dayOfTheMonth.getMonth() + 1) + '/' +  dayOfTheMonth.getDate() + '/' + dayOfTheMonth.getFullYear())

			};
			returnedDays.push(dayToAdd);
			dayOfTheMonth.setDate(dayOfTheMonth.getDate() + 1);
		}
		return returnedDays;
	}

	getDateList(Month: number, Year: number){
		return [...this.getPreviousMonthDays(Month, Year),
		...this.getCurrentMonthDays(Month, Year),
		...this.getNextMonthDays(Month, Year)];
	}


	getPreviousMonthDays(Month: number, Year: number): dayOfTheMonth[] {
		let day = new Date(Month + '/1/' + Year);
		let returnedDays: dayOfTheMonth[] = [];

		let dayOfTheWeek = day.getDay();

		while (dayOfTheWeek != 0) {
			day.setDate(day.getDate() - 1);
			returnedDays = [{
				day: day.getDate(),
				dayOfTheWeek: day.getDay(),
				month: day.getMonth() + 1,
				date: new Date((day.getMonth() + 1) + '/' +  day.getDate() + '/' + day.getFullYear())
			}, ...returnedDays];
			dayOfTheWeek = day.getDay();
		}

		return returnedDays;
	}

	getNextMonthDays(Month: number, Year: number): dayOfTheMonth[] {
		let day = new Date(Month + '/1/' + Year);
		day.setMonth(day.getMonth() + 1);
		day.setDate(day.getDate() - 1);

		let returnedDays: dayOfTheMonth[] = [];

		let dayOfTheWeek = day.getDay();

		while (dayOfTheWeek != 6) {
			day.setDate(day.getDate() + 1);

			returnedDays = [...returnedDays, {
				day: day.getDate(),
				dayOfTheWeek: day.getDay(),
				month: day.getMonth() + 1,
				date: new Date((day.getMonth() + 1) + '/' +  day.getDate() + '/' + day.getFullYear())
			}];
			dayOfTheWeek = day.getDay();
		}

		return returnedDays;
	}

	getMonths():string[]{
		return this.months;
	}

	getMonthText(date: Date): string{
		return this.months[date.getMonth()];
	}

	getAvailableYears(): number[] {
		const currentYear = new Date().getFullYear();
		let startYear = currentYear - 80;
		let returnYears: number[] = [];

		while(startYear <= (currentYear+5)){
			returnYears.push(startYear);
			startYear = startYear + 1;
		}
		return returnYears;
	}
}