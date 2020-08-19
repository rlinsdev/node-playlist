// Aviso qual a classe que vou/quero requerer
// Coloco uma variável
const counter = require('./count');


console.log(counter.counter([1,2,3]));
console.log(counter.teste(1,2,3));

// ----------------------type of functions -
// // Normal function statement
// function sayHi(){
//   console.log('hu');
// }

// // Function expression (Anonimous function)
// const sayBye = function(){
//   console.log('bye');
// };

// sayBye();
// ----------------------type of functions -


// let time = 0;

// const timer = setInterval(function () {
//   time += 2;
//   console.log(`${time} seconds have passed`);

//   if (time > 5) {
//     console.log("enrou?");
//     clearInterval(timer);
//   }
// }, 2000);
