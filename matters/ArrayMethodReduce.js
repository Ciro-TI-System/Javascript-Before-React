//Array

const array = [1, 2, 3, 4, 5]

//Array Method

//reduce
const soma = array.reduce((acc, item) => {
  return acc + item
}, 0)

document.body.innerText = JSON.stringify(soma)
