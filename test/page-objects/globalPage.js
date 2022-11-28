const { assert } = require('chai');
var { until, driver, By } = require('selenium-webdriver');
const { clickElement, element } = require('wd/lib/commands');

class NewGlobalPage {

    typeOfLocator = {
        xpath: By.xpath,
        name: By.name,
    };

    logo = [this.typeOfLocator.xpath, ".//div[@class='logo']"]

    waitForElement(element) {
        var waitTimeout = 15000;
        driver.wait(until.elementLocated(element[0](element[1]), waitTimeout))
    }

    waitForListOfElements(elements) {
        var waitTimeout = 15000;
        driver.wait(until.elementsLocated(elements[0](elements[1]), waitTimeout))
    }

    open(webdriver, url) {
        this.driver = webdriver
        driver = this.driver
        driver.get(url)
    };

    enterText(element, text) {
        this.waitForElement(element);
        driver.findElement(element[0](element[1])).sendKeys(text)

    }

    clickWebElement(element) {
        this.waitForElement(element);
        driver.findElement(element[0](element[1])).click();
    }

    async clickFirstIlementInList(listOfLocators, result) {
        this.waitForListOfElements(listOfLocators)
        const listOfElements = await driver.findElements(listOfLocators[0](listOfLocators[1]))

        for (let elem in listOfElements) {
            if (await listOfElements[elem].getText() === result) {
                listOfElements[elem].click()
                return
            }
        }
    }

    check_title(expectedTitle) {
        this.waitForElement(this.logo)
        driver.getTitle().then(function (actualTitle) {
            console.log("Check: " + actualTitle + " = " + expectedTitle)
            assert.equal(actualTitle, expectedTitle, "Title is wrong")
        })
    }
}
exports.NewGlobalPage = NewGlobalPage