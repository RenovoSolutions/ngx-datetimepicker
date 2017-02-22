import { TimeComponent } from './time.component';

describe('a time component', () => {
	let timeComponent : TimeComponent;

	// register all needed dependencies
	beforeEach(() => {
		timeComponent = new TimeComponent();
	});

	it('should have an instance', () => {
		expect(timeComponent).to.not.be.null;
	});
});