var { Builder, driver } = require('selenium-webdriver');

class newDriver {
    constructor() {
      return  this.getNewDriver();
    }

    getNewDriver() {
        driver = this.buildDriver();
          return driver;
    };

    buildDriver() {
        switch (process.env.PLATFORM) {
            case 'FIREFOX':
                return new Builder().forBrowser("firefox").build();
            default:
                return new Builder().forBrowser("chrome").build();
        }
    };
}
exports.newDriver = newDriver;
