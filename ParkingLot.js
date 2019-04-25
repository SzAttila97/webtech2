function ParkingLot(initialSize){
	this.initialSize = initialSize;
	this.numberOfAvailableLots = initialSize;
	this.lots = generateLots(initialSize);
	this.parkCar = function(car){
		if(this.numberOfAvailableLots == 0){
			console.log("No more space remove one first");
			return;	
		}
		if(car.parkingLot != undefined){
			console.log("already parking");
			return;		
		}	
		car.parkingLot = findFirstAvailable(this.lots);
		this.lots[car.parkingLot-1].free = false;
		this.numberOfAvailableLots -= 1;
		if(this.numberOfAvailableLots == 0){
			console.log("no more space");		
		}
	}
	this.removeCar = function(car){
		if(car.parkinglot!=undefined){
		this.lots[car.parkingLot-1].free = true;
		delete car.parkingLot;
		this.numberOfAbailableLots+=1;
		}	
	}
}

function findFirstAvailable(lots){
	var i;	
	for(i=0;i<lots.length;i++){
		if (lots[i].free){
			return lots[i].id;		
		}	
	}
}

function generateLots(size){
	var array = new Array(size);
	var i;
	for (i=0;i<size;i++){
		array[i] = {id: generateId(), free: true}	
	}
	return array;
}

var generateId = (function(){
	var cnt = 0;
	return function(){cnt+=1; return cnt;}
})();

module.exports = {
	ParkingLot : ParkingLot
}
