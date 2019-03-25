var cd = require('chromedriver');
var selenium = require('selenium-webdriver');
var browser;

var chai = require('chai');
chai.use(require('chai-as-promised'));

var indexPage = require('../pages/indexPage');

describe('Idokep.hu automated testing', function() {
	this.timeout(1000 * 60);
	var index;
	
	before(function() {
		browser = new selenium.Builder().forBrowser('chrome').build();
		index = new indexPage(browser);
		return browser.manage().window().maximize();
	});
	
	/*
	after(function() {
		return browser.quit();
	});
	*/
	
	describe('Find city', function() {
		
		it('Open index page', function(){
			index.get();
		});
		
		it('Click on choose city button', function() {
			index.clickMenuItem('show-panel');
		});
		
		it('Click on a city name: Eger', function() {
			index.clickRef('#lightbox-panel > form > div.varos-wrap > div.megyeszekhely > ul > li:nth-child(4) > a');
		});
		
	});
	
});