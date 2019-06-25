const winston = require("winston");
const path = require("path");
const { createLogger, format, transports } = winston;
// eslint-disable-next-line no-unused-vars
const fs = require("fs-extra");

let logger = createLogger({
	transports: [
		new transports.Console({
			format: format.combine(
				format.colorize(),
				format.simple()
			)
		}),
		new transports.File({
			filename: path.resolve("./logs/error.log"),
			level: "error",
			format: format.combine(
				format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
				format.simple()
			)
		}),
		new transports.File({
			filename: path.resolve("./logs/debug.log"),
			level: "info",
			format: format.combine(
				format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
				format.simple()
			)
		})
	]
});

module.exports = {
	logger
};
