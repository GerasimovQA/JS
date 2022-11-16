var newGlobalePage = require('./globalPage');

class newSimplePage {
  newGP = new newGlobalePage.NewGlobalPage;

  input = [this.newGP.typeOfLocator.name,"q"]
  list = [this.newGP.typeOfLocator.xpath,".//li[@role=\"presentation\"][not(@id)]"]

}

exports.newSimplePage = newSimplePage;