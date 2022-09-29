//Promises
// .then / .catch

fetch('https://api.github.com/users/Ciro-TI-System')
  /*.then(response => {
    response.json().then(body => {
      console.log(body);
    })
  })*/
  .then(response => {
    return response.json();
  })
  .then(body => {
    console.log(body);
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log('Promise fulfilled!')
  })