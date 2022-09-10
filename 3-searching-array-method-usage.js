/**
 * This file is a function to give an usage example
 * of searching and array method
 *
 * create by: @tamagossi
 */

// -- indexOf and includes --//

const wulingAirEV = {
	name: 'Wuling Air EV',
	brand: 'Wuling',
	type: 'EV',
};

const carTypeWhichAllowToUsePertalite = ['Gas', 'Gas below 300M'];

const isAllowToUsePertalite = !carTypeWhichAllowToUsePertalite.includes(wulingAirEV.type);
const isAllowToBuyEvvo89 = !carTypeWhichAllowToUsePertalite.indexOf(wulingAirEV.type) > -1;

if (!isAllowToUsePertalite || !isAllowToBuyEvvo89) {
	console.log(`Let's buy the car`);
}

// -- search and filter, push -- //

const people = [
	{
		name: 'Luis Milla',
		age: 58,
	},
	{
		name: 'Dia Dilla',
		age: 20,
	},
	{
		name: 'Passos',
		age: 11,
	},
	{
		name: 'Anthony Elanga',
		age: 80,
	},
	{
		name: 'Anthony',
		age: 11,
	},
	{
		name: 'Antony Martial',
		age: 44,
	},
];

const filteredFilterWithPush = [];
const filteredPeopleWithSearch = people.filter((person) => person.name.search(/lla/i) > -1);
const filteredPeopleWithIncludes = people.filter((person) => person.name.includes(/lla/i) > -1);

people.forEach((person) => {
	if (person.name.includes(/lla/i)) filteredFilterWithPush.push(person);
});

// -- at -- //

const secondPeson = people.at(2);

// -- find -- //

const searchPersonByname = (name) => {
	return people.find((person) => person.name === name);
};

searchPersonByname('David Luiz');

// -- unshift -- //

const reverseString = (text) => {
	const reversedString = [];
	text.forEach((char) => reversedString.unshift(char));
};

// -- map -- //

const cars = [
	{ name: 'Hyundai Creta Prime', price: 800000000 },
	{ name: 'Hyundai Ioniq 6', price: 800000000 },
	{ name: 'Wuling Air EV', price: 250000000 },
	{ name: 'Ayla EV', price: 250000000 },
];

const withDiscount = [];
cars.forEach((car) => withDiscount.push({ ...car, price: (50 / 100) * car.price }));

const carWithHalfPrice = cars.map((car) => {
	return { ...car, price: (50 / 100) * car.price };
});

// -- reduce -- //

const numbers = [1, 45, 24, 756, 23];
const total = numbers.reduce((prevValue, number) => prevValue + number, 0);

const listOfCarname = cars.reduce((prevValue, car) => [...prevValue, car.name], []);
const animalObejct = ['Ha Sung Woon', 'New Jeans', 'Youha', 'N. Flying', 'NATURE'].reduce(
	(prevValue, artist) => {
		return { ...prevValue, [artist]: artist };
	},
	{}
);
