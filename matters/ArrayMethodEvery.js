//Array

const array = [1, 2, 3, 4, 5, 'teste']

//Array Method

//every
const allItemsAreNumbers = array.every(item => {
  return typeof item === 'number'
});

document.body.innerText = JSON.stringify(allItemsAreNumbers);