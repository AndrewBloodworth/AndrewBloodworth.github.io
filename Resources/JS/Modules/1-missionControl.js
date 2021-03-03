//Getting the module from another file and saving it to an Object.
const Airplane = require('./1-airplane.js');

const displayAirplane = () => {
    //using a property from the imported module.
  console.log(Airplane.myAirplane);
}
displayAirplane()