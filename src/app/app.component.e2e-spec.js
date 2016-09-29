describe('App', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual("Blockchain Dashboard");
  });

  it('should have a main title', function () {
    expect(element(by.css('main h1')).getText()).toEqual('Blockchain Dashboard');
  });
});
