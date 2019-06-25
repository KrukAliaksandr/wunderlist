/* eslint-disable no-undef */
const path = require("path");
const logger = require(path.resolve("./test/wunderlist/config/loggerConfig.js")).logger;
const yargs = require("yargs").argv;

exports.config = {
	allScriptsTimeout: 20000,
	getPageTimeout: 20000,
	framework: "custom",
	frameworkPath: require.resolve("protractor-cucumber-framework"),
	specs: [path.resolve("./test/wunderlist/features/*.feature")],
	capabilities: {
		browserName: yargs.browser || "chrome",
		shardTestFiles: yargs.instances > 1,
		maxInstances: yargs.instances || 1
	},
	disableChecks:true,
	cucumberOpts: {
		require: [path.resolve("./test/wunderlist/steps/**/*.js")],
		tags: yargs.tags || "@All",
		ignoreUncaughtExceptions: true,
		format: "json:./reports/report.json",
	},
	onPrepare: () => {
		logger.info("Maximizing browser window");
		browser.manage().window().maximize();
		browser.waitForAngularEnabled(false);
	}
};	