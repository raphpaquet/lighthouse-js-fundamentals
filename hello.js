
const sayHello = function(name) {
  console.log('Hello, ' + name);
} 

sayHello('Maria');


const returnSayHello = function(name) {
  return 'Hello ' + name;
}
const greeting = returnSayHello('Dudu');

console.log(greeting);
