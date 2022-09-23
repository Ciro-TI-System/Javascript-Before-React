//Nullish Coalescing Operator

const idade = 0;

//0, '', [], {}, false, undefined, null => falsy
document.body.innerText = 'Sua idade é: ' + (idade || 'Não informado');

document.body.innerText = 'Sua idade agora é: ' + (idade ?? 'Não informado');
