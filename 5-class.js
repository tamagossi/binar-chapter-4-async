class Car {
	constructor(name, price, isElectric) {
		this.name = name;
		this.price = price;
		this.isElectric = isElectric;
	}

	start = () => {
		console.log(`car by the name of ${this.name} will be started`);
	};
}

const xpander = new Car('Xpander', 308000000, false);

class Wuling extends Car {
	halloWuling = () => {
		console.log('Hallo');
	};
}

const almaz = Wuling('Almaz', 400000000, false);
