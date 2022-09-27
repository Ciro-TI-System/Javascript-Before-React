//Array

const array = [1, 2, 3, 4, 5]

//Array Method

//filter
const evenNumber = array
  .filter(item => item % 2 === 0)

const oddNumber = array
  .filter(item => item % 2 !== 0)
  .map(item => item * 10)

document.body.innerText = JSON.stringify(oddNumber);