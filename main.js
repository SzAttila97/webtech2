const carManager = require("./webtech2_1.js");
const garage = require("./ParkingLot.js");

var carFiat = new carManager.Car("Fiat","Punto",2014,"HIV-123");
var carRenault = new carManager.Car("Renault","Megane",2014,"TBC-123");
var carFord = new carManager.Car("Ford","Focus",2014,"ABC-123");
console.log(carFord);
console.log(carRenault);
console.log(carFiat);

var Garage = new garage.ParkingLot(2);
console.log(Garage);

Garage.parkCar(carFord);
console.log(Garage);
console.log(carFord);


Garage.parkCar(carFiat);
console.log(Garage);
console.log(carFiat);
Garage.removeCar(carFord);
console.log(Garage);
Garage.parkCar(carRenault);
