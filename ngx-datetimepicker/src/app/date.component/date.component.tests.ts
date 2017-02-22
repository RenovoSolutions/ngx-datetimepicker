import { DateComponent } from './date.component';

describe('a date component', () => {
	let dateComponent : DateComponent;

	// register all needed dependencies
	beforeEach(() => {
		dateComponent = new DateComponent();
	});

	it('should have an instance', () => {
		expect(dateComponent).to.not.be.null;
	});
});