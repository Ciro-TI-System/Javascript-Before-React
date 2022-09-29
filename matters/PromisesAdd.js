//Promises
// .then / .catch

const addTwoNumbers = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve(a + b);
      reject("This 'Promise' Was Rejected");
    }, 2000);
  })
}

addTwoNumbers(1, 3)
  .then(soma => {
    document.body.innerText = soma
  })
  .catch(err => {
    console.log(err)
  })