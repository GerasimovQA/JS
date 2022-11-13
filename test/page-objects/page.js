var newGlobalePage = require('./globalPage');

class newSimplePage {

  delimeter = " -!+!- ";
  input = "name -!+!- q";
  list = "xpath -!+!- .//li[@role=\"presentation\"][not(@id)]";

  typeSearchQuery(searchQuery) {
    var newGP = new newGlobalePage.NewGlobalPage();
    newGP.enterText(this.input, searchQuery);
  };

  clickFirstIlementInPopUpList() {
    var newGP = new newGlobalePage.NewGlobalPage();
    newGP.clickElement(this.list);
  };
}

exports.newSimplePage = newSimplePage;