const { By, Key, Builder } = require("selenium-webdriver");
const { Asserter, asserters } = require("wd");
require("chromedriver");
const assert = require("assert");

describe("Group one", function () {
        var driver;
        var searchString = "Automation testing with Selenium";

        beforeEach(function () {
                console.log("Starting test: " + this.currentTest.title);
                //To wait for browser to build and launch properly
                driver = new Builder().forBrowser("chrome").build();
        });

        afterEach(function () {
                //It is always a safe practice to quit the browser after execution
                driver.quit();
        });

        it("Test one", async function () {
                //To fetch http://google.com from the browser with our code.
                await driver.get("http://google.com");

                //To send a search query by passing the value in searchString.
                await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);

                //Verify the page title and print it
                var title = await driver.getTitle();
                console.log('Title is:', title);
                assert.strictEqual(title, searchString + " - Google Search")
        })
        it("Test two", async function () {
                //To fetch http://google.com from the browser with our code.
                await driver.get("http://google.com");

                //To send a search query by passing the value in searchString.
                await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);

                //Verify the page title and print it
                var title = await driver.getTitle();
                console.log('Title is:', title);
                assert.strictEqual(title, searchString + " - Google Search")
        })
}
);









