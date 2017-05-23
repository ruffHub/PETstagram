'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /posts when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/posts");
  });


  describe('main', function() {

    beforeEach(function() {
      browser.get('index.html#!/posts');
    });


    it('should render posts when user navigates to /posts', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('profile', function() {

    beforeEach(function() {
      browser.get('index.html#!/profile');
    });


    it('should render profile when user navigates to /profile', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
