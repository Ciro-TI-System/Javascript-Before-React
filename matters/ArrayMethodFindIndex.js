//Array

const array = [1, 4, 3, 2, 5, 'teste']

//Array Method

//find index
const indexEvenNumber = array.findIndex(item => item % 2 === 0)

document.body.innerText = JSON.stringify(indexEvenNumber);