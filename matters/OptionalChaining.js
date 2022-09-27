

const dog = {
  name: 'Ted',
  age: 2,
  features: {
    breed: 'Siberian Husky',
    levelOfCare: 'medium',
    //  personality: {
    //friendly,
    // hardworking,
    //outgoing,
    //},
    trainedDog() {
      return 'OK';
    },
  },
};

/*document.body.innerText = JSON.stringify(
  dog.features ? 
  dog.features.breed : 
  'The breed of the dog was not informed!'
  )*/

//-----------------------------------------------------------------------------------------
//Optional Chaining

/*document.body.innerText = JSON.stringify(
  dog.
    features?.
    personality?.
    friendly ??
  'Não informado!'
)*/

//--------------------------------------------------------------------------------------------

/*document.body.innerText = JSON.stringify(dog?.features.trainedDog?.())*/

//--------------------------------------------------------------------------------------------

//Using a variable to fetch properties
const key = 'breed';
document.body.innerText = dog.features[key]
