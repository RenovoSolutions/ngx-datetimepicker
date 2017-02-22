import { Component, OnInit } from '@angular/core';

import { isMobile } from '../services/isMobile.service';

@Component({
	selector: 'ngx-date',
	template: require('./date.component.html')
})

export class DateComponent implements OnInit {

	constructor(public isMobile: isMobile) { }

	ngOnInit() { }

}