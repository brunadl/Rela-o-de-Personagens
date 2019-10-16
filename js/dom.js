// aprender a pegar os elementos por id - class - tag

//forma 1 pelo id
let dado1 = document.getElementById('heroi-um');
console.log(dado1);

//forma 1 pela classe
let dado2 = document.getElementsByClassName('nome');
console.log(dado2);

//pegando e alterando o conteúdo
// let heroi1 = dado2[1].textContent;
// console.log('Nome do heroi 1: ' + heroi1);
// dado2[1].textContent = 'Mulher Maravilha';

//forma1 pela tag
let dado3 = document.getElementsByTagName('td');
console.log(dado3);


//forma2 pelo id
let dado4 = document.querySelector('#tabela-herois');
console.log(dado4);

//forma2 pela class
let dado5 = document.querySelectorAll('.nome');
console.log(dado5);

//forma3 pela tag
let dado6 = document.querySelectorAll('tr');
console.log(dado6);
