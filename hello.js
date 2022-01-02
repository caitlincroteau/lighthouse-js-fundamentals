/*
const sayHello  = function () {
  console.log("Hello, world");
}

const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caitlin");
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
*/


const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('James');

//console.log(greeting);