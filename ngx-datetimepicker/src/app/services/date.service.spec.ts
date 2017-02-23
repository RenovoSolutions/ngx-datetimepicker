/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DateService } from './date.service';


describe('AppComponent', () => {
  let dateService: DateService;

  beforeEach(() => {
    dateService = new DateService();
  });

  it('Should not be null', () => {
    expect(dateService).toBeTruthy();
  });

  it('Should return count to be 35 when given Feb 2017', () => {
    var response = dateService.getDateList(2, 2017);

    expect(response.length).toBe(35);

  });

  it('Should return the last 3 days in January 2017 when given Feb 2017', ()=>{
    var response = dateService.getPreviousMonthDays(2, 2017);

    expect(response.length).toBe(3);
    expect(response[0].day).toBe(29);
    expect(response[0].month).toBe(2);
    expect(response[1].day).toBe(30);
    expect(response[2].day).toBe(31);
  });

  it('Should return 4 days when given Feb 2017', ()=>{
    var response = dateService.getNextMonthDays(2, 2017);

    expect(response.length).toBe(4);

    expect(response[0].day).toBe(1);
    expect(response[3].day).toBe(4);
  });

  it('should return "May" when givin 5/1/2017',()=>{
    expect(dateService.getMonthText(new Date('5/1/2017'))).toEqual('May');
  });
});
