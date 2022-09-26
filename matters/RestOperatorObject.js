//Object

const smartphone = {
  name: 'M12',
  manufacturer: 'Samsung',
  features: {
    color: 'Azul',
    android: '12',
  },
};

//Rest Operator

const {name, manufacturer, ...rest} = smartphone;
document.body.innerText = JSON.stringify(rest)