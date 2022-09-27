//Template Literals

//const name = 'Ciro';
const name = null;
//const message = 'Welcome, ' + name;
const message = `Welcome, ${name ?? 'visitante'}`

document.body.innerText = message