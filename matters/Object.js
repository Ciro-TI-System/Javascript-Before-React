//Objetos

const user = {
  name: 'Ciro',
  age: 42,
  adress: {
    street: 'Rua Teste',
    number: 176,
  },
};

document.body.innerText = ('name' in user)
document.body.innerText = ('nickname' in user)
document.body.innerText = Object.keys(user)
document.body.innerText = JSON.stringify(Object.values(user))
document.body.innerText = JSON.stringify(Object.entries(user))