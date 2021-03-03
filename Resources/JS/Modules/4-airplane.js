
const makeAirplane = (name, availableStaff, fuelCap, maxSpeed, minSpeed) => {
    return {
      name: name,
      availableStaff: availableStaff,
      fuelCapacity: fuelCap,
      maxSpeed: maxSpeed,
      minSpeed: minSpeed
    }
  }
  export let availableAirplanes = [makeAirplane('AeroJet', ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'], 800, 1200, 300), makeAirplane('SkyJet', ['pilots', 'flightAttendants'], 500, 800, 200)];
  
   export let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
  };
  export const meetsStaffRequirements = (availableStaff, requiredStaff) => {
    if (availableStaff.length >= requiredStaff) {
      return true;
    } else {
      return false;
    }
  }
  export const meetsSpeedRangeRequirements = (maxSpeed, minSpeed, requiredSpeedRange) => {
    let range = maxSpeed - minSpeed;
    if (range > requiredSpeedRange) {
      return true;
    } else {
      return false;
    }
  }