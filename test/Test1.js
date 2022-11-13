var newSimplePage = require('./page-objects/page');
var newGlobalePage = require('./page-objects/globalPage');
var newDriver = require('./driver');
var { driver } = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');

test.describe('Google Search1', function () {
    this.timeout(15000);
    var testsss = [
        { searchString: "Selenium", url: "http://google.com" },
        { searchString: "Cypress", url: "http://google.com" },
        { searchString: "Ranorex", url: "http://google.com" }
    ];

    test.beforeEach(function (done) {
        driver = new newDriver.newDriver();
        console.log("driver is started");
        done();
    });
    test.afterEach(function (done) {
        if (driver)
            driver.quit();
        console.log("driver is closed");
        done();
    });
      testsss.forEach(function (parameters) {
        test.it("Parametrized - " + parameters.searchString, function (done) {
            var newGP = new newGlobalePage.NewGlobalPage;
            newGP.open(driver, parameters.url);
            var newSP = new newSimplePage.newSimplePage();
            newSP.typeSearchQuery(parameters.searchString);
            newSP.clickFirstIlementInPopUpList();
            done();
        });
      });
    test.it('simple test with pageObject', function (done) {
        var newGP = new newGlobalePage.NewGlobalPage;
        newGP.open(driver, "http://google.com");
        var newSP = new newSimplePage.newSimplePage();
        newSP.typeSearchQuery('Automated testing 2');
        newSP.clickFirstIlementInPopUpList();
        done();
    });
});




