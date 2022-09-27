//Array

const array = [1, 2, 3, 4, 5, 'teste']

//Array Method

//some
const atLeastOneItemIsNotANumber = array.some(item => {
  return typeof item !== 'number'
});

document.body.innerText = JSON.stringify(atLeastOneItemIsNotANumber);