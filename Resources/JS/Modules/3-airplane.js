
const makeAirplane = (name, availableStaff, fuelCap) => {
    return {
      name: name,
      availableStaff: availableStaff,
      fuelCapacity: fuelCap
    }
  }
  let availableAirplanes = [makeAirplane('AeroJet', ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'], 800), makeAirplane('SkyJet', ['pilots', 'flightAttendants'], 500)];
  
  let flightRequirements = {
    requiredStaff: 4,
  };
  const meetsStaffRequirements = (availableStaff, requiredStaff) => {
    return (availableStaff.length >= requiredStaff.length) ? true : false;
  }
  //Exporting variables and objects 
  export { availableAirplanes, flightRequirements, meetsStaffRequirements };
  
  
  
  