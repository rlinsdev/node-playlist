// #23 - Express
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use('/assets', express.static('assets'));

app.get("/", function (req, res) {
  res.render("index");
});


app.get("/contact", function (req, res) {
  console.log();
  res.render("contact");
});

app.get("/profile/:name", function (req, res) {
  let data = {
    age: 29,
    job: "ninja",
    hobbies: ["fishin", "Hunting", "Racing"],
  };

  res.render("profile", { person: req.params.name, data: data });
});

app.listen(3001);

// //#19
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer(function (req, res) {
//   console.log(`request was made ${req.url}`);

//   if (req.url === "/home" || req.url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     fs.createReadStream(__dirname + "/index.html").pipe(res);
//   } else if (req.url === "/contact") {
//     res.writeHead(200, { "content-type": "text/html" });
//     fs.createReadStream(__dirname + "/contact.html").pipe(res);
//   } else if (req.url == "/api") {
//     const ninjas = [
//       { name: "Ryu", age: 29 },
//       { name: "yoshy", age: 150 },
//     ];
//     res.writeHead(200, {"content-type": 'application/json'});
//     res.end(JSON.stringify(ninjas));
//   }
//   // res.writeHead(200, { "Content-Type": "application/json" });

//   // res.end("Feed me pop-corn");
//   // const myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
//   // myReadStream.pipe(res);
// });

// server.listen(3000, "127.0.0.1");
// console.log("listen in port 3000");

//#17 /
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer(function (req, res) {
//   console.log(`request was made ${req.url}`);
//   res.writeHead(200, { "Content-Type": "application/json" });
//   const myObject = {
//     name:'Ryu',
//     job: 'Ninja',
//     age: 29
//   }
//   res.end(JSON.stringify(myObject));
//   // const myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
//   // myReadStream.pipe(res);
// });

// server.listen(3000, "127.0.0.1");
// console.log("listen in port 3000");

// //#15 -

// //# 14 Strems
// const http = require("http");
// const fs = require("fs");

// const myReadStream = fs.createReadStream(__dirname + "/README.md", "utf8");
// const myWriteStream = fs.createWriteStream(__dirname + "/writeme.md");

// myReadStream.pipe(myWriteStream);

// myReadStream.on("data", function (chunk) {
//   console.log("new chunk received");
//   //console.log(chunk);
//   myWriteStream.write(chunk);
// });

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
