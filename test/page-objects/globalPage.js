const { assert } = require('chai');
var { until, driver, By } = require('selenium-webdriver');
const { clickElement, element } = require('wd/lib/commands');

class NewGlobalPage {

    typeOfLocator = {
        xpath: By.xpath,
        name: By.name,
    };

    logo = [this.typeOfLocator.xpath, ".//div[@class='logo']"]

    open(webdriver, url) {
        this.driver = webdriver
        driver = this.driver
        driver.get(url)
    };

    enterText(element, text) {
        this.waitForElement(element);
        if (element[0] === By.xpath) {
            console.log("enter text by xpath to - " + element[1])
            driver.findElement(By.xpath(element[1])).sendKeys(text)
        } if (element[0] === By.name) {
            console.log("enter text by name to - " + element[1])
            driver.findElement(By.name(element[1])).sendKeys(text)
        }
    }

    clickWebElement(element) {
        this.waitForElement(element);
        if (element[0] === By.xpath) {
            console.log("click element by xpath to - " + element[1])
            driver.findElement(By.xpath(element[1])).click();
        } if (element[0] === By.name) {
            console.log("click element by name to - " + element[1])
            driver.findElement(By.name(element[1])).click();
        }
    }

    waitForElement(element) {
        var waitTimeout = 15000;
        if (element[0] === By.xpath) {
            console.log("wait for element by xpath - " + element[1])
            driver.wait(until.elementLocated(By.xpath(element[1]), waitTimeout))
        } if (element[0] === By.name) {
            console.log("wait for element by name - " + element[1])
            driver.wait(until.elementLocated(By.name(element[1]), waitTimeout))
        }
    }

    clickFirstIlementInList(listOfLocators, result) {
        var waitTimeout = 15000;
        driver.wait(until.elementsLocated(By.xpath(listOfLocators[1]), waitTimeout))

        driver.findElements(By.xpath(listOfLocators[1])).then(function (elements) {
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
