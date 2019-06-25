/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { Then } = require("cucumber");
const path = require("path");
const stepFunctions = require("./stepFunctions");
const { expect } = require("chai");
const logger = require(path.resolve("./test/wunderlist/config/loggerConfig.js")).logger;

Then(/^Count of "([^"]*)" should( not)? be "([^"]*)"$/, async (alias, notArg, expectedNumber) => {
	notArg = notArg ? " not" : "";
	let element = await stepFunctions.getPageObjectElement(alias);
	let result = await element.length;
	expectedNumber = parseInt(expectedNumber);
	if (notArg) {
		return expect(result).to.not.equal(expectedNumber);
	} else {
		return expect(result).to.equal(expectedNumber);
	}
});

Then(/^Class Attribute of element "([^"]*)" from "([^"]*)" should( not)? be "([^"]*)"$/, async (position, alias, notArg, expectedValue) => {
	notArg = notArg ? " not" : "";
	const element = await (stepFunctions.getSomeElementFromArray(position-1, alias));
	const classAtr = await element.getAttribute("class");
	if (notArg) {
		return expect(classAtr).to.not.equal(expectedValue);
	} else {
		return expect(classAtr).to.equal(expectedValue);
	}

});

Then(/^Text of element "([^"]*)" from "([^"]*)" should( not)? be "([^"]*)"$/, async (position, alias, notArg, expectedValue) => {
	notArg = notArg ? " not" : "";
	const element = await (stepFunctions.getSomeElementFromArray(position-1, alias));
	const elText = await element.getText();
	if (notArg) {
		return expect(elText).to.not.include(expectedValue);
	} else {
		return expect(elText).to.include(expectedValue);
	}
	
});

Then(/^Text of each "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
	notArg = notArg ? " not" : "";
	let elements = await stepFunctions.getPageObjectElement(alias);
	let wrongStrings = [];
	for (let i = 0; i < elements.length; i++) {
		if (!(await elements[i].getText()).includes(textToContain)) {
			wrongStrings.push(await elements[i].getText());
		}
	}
	
	return wrongStrings.length ? Promise.reject(`Strings not containing "${textToContain}":\n${wrongStrings.join("\n")}`) : Promise.resolve();
});

Then(/^"([^"]*)" should( not)? be visible$/, async (alias, notArg) => {
	notArg = notArg ? " not" : "";
	logger.info(`${alias} should${notArg} be visible`);
	const element = await stepFunctions.getPageObjectElement(alias);
	const result = await element.isPresent();
	return expect(result).to.be.equal(!notArg);
});

Then(/^Text of "([^"]*)" should( not)? contain "([^"]*)"$/, async (alias, notArg, textToContain) => {
	notArg = notArg ? " not" : "";
	const element = await stepFunctions.getPageObjectElement(alias);
	const elementText = await element.getText();
	logger.info(`Text of ${alias} should ${notArg} contain ${textToContain}`);
	return expect(elementText.toLowerCase()).to.include(textToContain.toLowerCase());
});
