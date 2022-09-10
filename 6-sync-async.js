const fs = require('fs');
const https = require('https');

const logNumbersSync = () => {
	console.log('1');
	console.log('2');
	console.log('3');
	console.log('4');
	console.log('5');
};

const logNumbersAsync = () => {
	console.log('1');
	console.log('2');

	setTimeout(() => {
		console.log('3');
	}, 2000);

	console.log('4');
	console.log('5');
};

const readFileAsync = () => {
	fs.readFile('./file.txt', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(data);
	});

	console.log('I can do else here');
	console.log('1');
	console.log('2');
	console.log('3');
	console.log('4');
	console.log('5');
};

const url = 'https://jsonmock.hackerrank.com/api/movies';
https
	.get(url, (res) => {
		let data = '';
		res.on('data', (chunk) => {
			data += chunk;
		});
		res.on('end', () => {
			data = JSON.parse(data);
			console.log(data);
		});
	})
	.on('error', (err) => {
		console.log(err.message);
	});
