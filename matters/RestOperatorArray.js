//Object

const smartphone = {
  name: 'M12',
  manufacturer: 'Samsung',
  features: {
    color: 'Azul',
    android: '12',
  },
};

//Array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const first = array[0];
//const second = array[1];
//document.body.innerText = JSON.stringify(first)
//document.body.innerText = JSON.stringify(second)

//Rest Operator

const [first, , third, ...rest] = array;

document.body.innerText = JSON.stringify({first, third, rest})

