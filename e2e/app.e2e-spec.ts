import { NgxDatetimepickerPage } from './app.po';

describe('ngx-datetimepicker App', function () {
  let page: NgxDatetimepickerPage;

  beforeEach(() => {
    page = new NgxDatetimepickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
