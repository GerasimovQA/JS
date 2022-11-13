var { until, driver, By } = require('selenium-webdriver');

class NewGlobalPage {
    delimeter = " -!+!- ";

    open(webdriver, url) {
        this.driver = webdriver;
        driver = this.driver
        driver.get(url);
    };

    waitForElement(locator, timeout) {
        var waitTimeout = timeout || 20000;
        return driver.wait(until.elementLocated(locator, waitTimeout));
    };

    enterText(element, text) {
        this.waitForElement(element);
        if (element.includes("xpath")) {
            console.log("enter text by xpath to - " + element.split(this.delimeter)[1])
            driver.findElement(By.xpath(element.split(this.delimeter)[1])).sendKeys(text);
        } if (element.includes("name")) {
            console.log("enter text by name to - " + element.split(this.delimeter)[1])
            driver.findElement(By.name(element.split(this.delimeter)[1])).sendKeys(text);
        }
    }

    clickElement(element, text) {
        this.waitForElement(element);
        if (element.includes("xpath")) {
            console.log("click element by xpath to - " + element.split(this.delimeter)[1])
            driver.findElement(By.xpath(element.split(this.delimeter)[1])).click();
        } if (element.includes("name")) {
            console.log("click element by name to - " + element.split(this.delimeter)[1])
            driver.findElement(By.name(element.split(this.delimeter)[1])).click();
        }
    }

    waitForElement(element) {
        var waitTimeout = 15000;
        if (element.includes("xpath")) {
            console.log("wait for element by xpath - " + element.split(this.delimeter)[1])
            driver.wait(until.elementLocated(By.xpath(element.split(this.delimeter)[1]), waitTimeout));
        } if (element.includes("name")) {
            console.log("wait for element by name - " + element.split(this.delimeter)[1])
            driver.wait(until.elementLocated(By.name(element.split(this.delimeter)[1]), waitTimeout));
        }
    }
};
exports.NewGlobalPage = NewGlobalPage
