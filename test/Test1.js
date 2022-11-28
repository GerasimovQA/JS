var newSimplePage = require('./page-objects/page');
var newGlobalePage = require('./page-objects/globalPage');
var newDriver = require('./driver');
var { driver } = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');

test.describe('Google Search1', function () {
    this.timeout(15000);
    var testsss = [
        { url: "http://google.com", short_request: "666", long_request: "6666 show", exp_title: "6666 show - Google Search"},
        { url: "http://google.com", short_request: "777", long_request: "7777 meaning", exp_title: "7777 meaning - Google Search"},
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
        test.it("Parametrized - " + parameters.short_request, function (done) {
            var newGP = new newGlobalePage.NewGlobalPage;
            newGP.open(driver, parameters.url);
            var newSP = new newSimplePage.newSimplePage();
            newGP.enterText(newSP.input,parameters.short_request);
            newGP.clickFirstIlementInList(newSP.list, parameters.long_request);
            newGP.check_title(parameters.exp_title)
            done();
        });
      });
});