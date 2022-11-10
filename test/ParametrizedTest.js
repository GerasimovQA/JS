const { By, Key, Builder } = require("selenium-webdriver");
const { Asserter, asserters } = require("wd");
require("chromedriver");
const assert = require("assert");
var itParam = require('mocha-param');


describe("Group three", function () {
        var testsss = [
                { searchString: "Selenium", url: "http://google.com" },
                { searchString: "Cypress", url: "http://google.com" },
                { searchString: "Ranorex", url: "http://google.com" }
        ];

        beforeEach(function () {
                console.log("Starting test: " + this.currentTest.title);
                driver = new Builder().forBrowser("chrome").build();
        });

        afterEach(function () {
                driver.quit();
        });

        testsss.forEach(function (parameters) {
                it("Parametrized - " + parameters.searchString, async function () {
                        await driver.get(parameters.url);
                        await driver.findElement(By.name("q")).sendKeys(parameters.searchString, Key.RETURN);
                        var title = await driver.getTitle();
                        console.log('Title is:', title);
                        assert.strictEqual(title, parameters.searchString + " - Google Search")
                })
        }
        );
});








