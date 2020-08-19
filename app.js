//#12 - Creating a http server in node to test
// const http = require("http");

// const server = http.createServer(function (request, response) {

//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end('Hey guys"');
// });

// server.listen(3000, "127.0.0.1");
// console.log("oprt 3000 listening");

// //#9
// const fs = require("fs");

// const readMe = fs.readFile("readme.md", "utf8", function(err,data){
//     console.log(readMe);
// });

//fs.writeFileSync('readme.md','utf8',)

// #8
// const events = require("events");
// const util = require("util");

// const Person = function (name) {
//   this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// const James = new Person("James");
// const Mary = new Person("Mary");
// const Ryu = new Person("Ryu");
// const people = [James, Mary, Ryu];

// people.forEach(function (person) {
//   console.log("log do foreach");
//   person.on("speak", function (mssg) {
//     console.log("log de quem tem a msg");
//     console.log(`${person.name} said ${mssg}`);
//   });
// });

// James.emit("speak", "hey dudes!");

// const events = require("events");

// const myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", function (mssg) {
//   console.log(mssg);
// });

// myEmitter.emit('someEvent','The event was emitted');

// // Aviso qual a classe que vou/quero requerer
// // Coloco uma variável
// const counter = require('./count');

// console.log(counter.counter([1,2,3]));
// console.log(counter.teste(1,2,3));

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
