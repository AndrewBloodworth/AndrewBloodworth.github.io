const Airplane = {};
const makeAirplane = (name,fuelCap) => {
  return {
    name: name,
    fuelCapacity: fuelCap
  }
}
Airplane.availableAirplanes = [makeAirplane('AeroJet',800), makeAirplane('SkyJet',500)];

export default Airplane;