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

    clickFirstIlementInList(listOfLocators, result) {
        this.waitForListOfElements(listOfLocators)

        driver.findElements(listOfLocators[0](listOfLocators[1])).then(function (elements) {
            elements.forEach(function (element) {
                element.getText().then(function (text) {
                    console.log("element: ", text)
                    if (text === result) {
                        element.click()
                        console.log("Chain is broken")
                    }
                }).catch(console => {
                    return
                })
            })
        })
    }

    check_title(expectedTitle) {
        this.waitForElement(this.logo)
        var actualTitle = driver.getTitle().then(function (actualTitle) {
            console.log("Check: " + actualTitle + " = " + expectedTitle)
            assert.equal(actualTitle, expectedTitle, "Title is wrong")
        })
    }
}
exports.NewGlobalPage = NewGlobalPage
