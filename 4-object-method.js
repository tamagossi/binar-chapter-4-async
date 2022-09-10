const singer = {
	name: 'Dreamcatcher',
	genre: 'Rock alternative',
	hits: ['Odd eye', 'BEcause', 'Red Sun', 'Jazz bar'],
};

console.log(Object.keys(singer));
console.log(Object.entries(singer));
console.log(Object.values(singer));
console.log('---');
Object.keys(singer).forEach((key) => console.log(key));
console.log('---');
Object.entries(singer).forEach((entry) => console.log(entry[0], entry[1]));
console.log('---');
Object.values(singer).forEach((value) => console.log(value));
