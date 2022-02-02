//&& = AND
//|| = OR
//! = NOT
//

//First Example

// const comida = 'pão na chapa';
// const bebida = 'cafézinho';

// if (bebida === 'cafézinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

//Second Example

// const conditionOne = true;
// const conditionTwo = false;

// console.log(conditionOne && conditionTwo);

//Tirth Example

// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

//Forth Example

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

//Practice

const currentHour = 24;
let message = 23;

if (currentHour >= 22){
    console.log(message="Não deveríamos comer nada, é hora de dormir");
} 
else if (currentHour >= 18 && currentHour < 22) {
    console.log(message="Rango da noite, vamos jantar :D");
}

// Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
// Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
// Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

//Practice2

// const bebidaPrincipal =  'cafezinho';
// const bebidaAlternativa = 'suco de laranja';

// if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }

// Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
// Implemente condicionais para que:
// Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
// Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".
// Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).

//Practice 3