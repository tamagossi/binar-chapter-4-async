/**
 * This file is a function to convert a text formed object
 * and write it into file with correct JSON format
 *
 * create by: @tamagossi
 */

const fs = require('fs');

const convertToObject = (string) => {
	return JSON.parse(
		string.replace(/(\w+:)/g, function (matchedStr) {
			return `"${matchedStr.substring(0, matchedStr.length - 1)}":`;
		})
	);
};

const readFromFile = (path) => {
	try {
		const data = fs.readFileSync(path);

		return data.toString();
	} catch (e) {
		console.log('Error:', e.stack);
	}
};

const writeFile = (fileName, data) => {
	try {
		fs.writeFile(fileName, data, (err) => {
			if (err) return console.error(err);
		});
	} catch (e) {
		console.log('Error:', e.stack);
	}
};

const convertTextObjectToValidJSON = () => {
	const text = readFromFile('./file.txt');
	const generatedObject = convertToObject(text);

	writeFile('array-json.txt', JSON.stringify([generatedObject]));
};

convertTextObjectToValidJSON();
