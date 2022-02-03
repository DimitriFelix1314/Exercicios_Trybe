// array

let pizzas = ['valor 1', 'valor 2', 'valor 3'] //entre outros

pizzas [3] = 'valor 4'; //adiciona/substitui pela posição

pizzas.push('valor 5'); //adiciona ao final

pizzas.unshift('valor 0'); //adiciona ao inicio

pizzas.pop(); //remove o ultimo valor

pizzas.shift(); // remove o primeiro valor

pizzas.indexOf('valor 2');

console.log(pizzas.legth); //saber o tamanho array

console.log(pizzas.sort()); //organizar a saida do array

console.log('Menu de sabores: ' + pizzas);

console.log(pizzas[1]); // trazer posição desejada

for (let index = 0; index < pizzas.length; index =+ 1) {
    console.log(pizzas[index]);
}

//Exercicio 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = [1];

console.log(menuServices);

//Exercicio 2

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Exercicio 3

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');

console.log(menu);