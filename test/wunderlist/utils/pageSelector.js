/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const path = require("path");


const pagesEnum = {
	"MAIN": {
		po: require(path.resolve("./test/wunderlist/pages/mainPage.json")),
		symptomes: [/^https:\/\/www\.wunderlist\.com\/$/]
	},
	"SIGNIN":
	{
		po: require(path.resolve("./test/wunderlist/pages/SignInPage.json")),
		symptomes: [/login\?redirect_url=\/webapp\/$/]
	},
	"SIGNIN_EXTERNAL_GOOGLE":
	{
		po: require(path.resolve("./test/wunderlist/pages/mainPageExternalMicrosoft.json")),
		symptomes: [/login.live.com\//]
	},
	"WEBAPP":
	{
		po: require(path.resolve("./test/wunderlist/pages/WebAppPage.json")),
		symptomes: [/https:\/\/www\.wunderlist\.com\/#\/lists\//, /https:\/\/www.wunderlist.com\/webapp#\/lists\//, /https:\/\/www\.wunderlist\.com\/webapp#\/start\/lists\//, /https:\/\/www\.wunderlist\.com\/webapp#\//]
	},
	"DOWNLOAD":
	{
		po: require(path.resolve("./test/wunderlist/pages/DownloadPage.json")),
		symptomes: [/https:\/\/www\.wunderlist\.com\/ru\/download\//, /https:\/\/www\.wunderlist\.com\/download\//]
	},
	"SUPPORT":
	{
		po: require(path.resolve("./test/wunderlist/pages/SupportPage.json")),
		symptomes: [ /https:\/\/6wunderkinder\.desk\.com\//]
	},
	"BLOG":
	{
		po: require(path.resolve("./test/wunderlist/pages/BlogPage.json")),
		symptomes: [ /https:\/\/www\.wunderlist\.com\/blog\//]
	}
};

const getPage = async () => {
	let currentUrl = await browser.getCurrentUrl();
	currentUrl = currentUrl.endsWith("/") ? currentUrl : currentUrl + "/";
	for (const page in pagesEnum) { // Check every ENUM page
		for (let symptome of pagesEnum[page].symptomes) {
			if (currentUrl.search(symptome) >= 0) {
				return pagesEnum[page].po;
			}
		}
	}
};


module.exports = {
	getPage
};