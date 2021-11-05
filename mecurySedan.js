//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

import { Vehicle } from "./vehicleBaseClass";


class Car extends Vehicle{
    constructor(){
        super(make, model, year, color, mileage);
            maximumPassengers=6;
            passenger=0;
            numberOfWheels=4;
            maximumSpeed=200;
            fuel=100;
            scheduleService=false;
    }

    loadPassenger(num){
        	if(this.passenger< maximumPassengers){
                availableRoom = true;
                if(this.passenger+num<= maximumPassengers){
                    this.passenger += num;
                    return this.passenger;
                }
                else {
                    console.log("This car not have enough space to take all passengers.");
    
                }
            }
        }
    start(){
        if(fuel > 0){
            start = true;
        }
    }
    scheduleService(mileage){
        if(mileage > 30000){
            scheduleService = true;
            return this.scheduleService;
        }
    }   
}