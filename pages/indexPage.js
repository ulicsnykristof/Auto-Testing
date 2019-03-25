function indexPage(browser){

	this.url = 'http://idokep.hu';
	
	this.get = function() {
		return browser.get(this.url);
	}
	
	this.clickMenuItem = function (item) {
		var menuItem = {id: item};
		var shit = browser.findElement(menuItem).click();
		return shit;
	}
	
	this.clickRef = function (item) {
		var menuItem = {css: item};
		return browser.findElement(menuItem).click();
	}
};

module.exports = indexPage;