//Array

const array = [1, 2, 3, 4, 5]

//Array Method

//map

/*const newArray = array.map(item => {
  return item * 2
})
document.body.innerText = JSON.stringify(newArray);*/

const newArray = array.map(item => {
  if (item % 2 === 0) {
    return item * 10;
  }
  return item
})
document.body.innerText = JSON.stringify(newArray);