function Car(manufacturer, model, year, plateNumber){
	this.manufacturer = manufacturer;
	this.model = model;
	this.year = year;
	this.plateNumber = testPlateNumber(plateNumber);
}

function testPlateNumber(plateNumber){
	var regex = new RegExp(/^[A-Za-z]{3}-\d{3}$/)
	var value = regex.test(plateNumber)
	if(!value){
		return undefined;
	}
	return plateNumber;
	
}

module.exports = {
Car: Car
}


