//Importing variables and objects
import { availableAirplanes, flightRequirements, meetsStaffReq } from './3-airplane';

const displayFuelCapacity = () => {
  availableAirplanes.forEach(function(element) {
    console.log(`Fuel Capacity of ${element.name} : ${element.fuelCapacity}`)
  })
}
displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffReq(element.availableStaff, flightRequirements.requiredStaff) );
  });
}
displayStaffStatus()
