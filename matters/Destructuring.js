//Object

const car = {
  name: 'Honda Civic',
  fabricante: 'Honda',
  features: {
    color: 'Preto',
    wheels: 'Liga leve aro 16',
  },
};

//Destructuring - Removing parts of an object to a variable

function showName(name) {
  return car.name;
}

//const features = car.features
const {features, fabricante : manufacturer, licensePlate = 'PLU 0000'} = car

//document.body.innerText = JSON.stringify({features, manufacturer, licensePlate})

document.body.innerText = showName(car)