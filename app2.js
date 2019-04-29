var greet = require('./greet2');

greet();
// Hello world

var greet3 = require('./greet3').greet;
greet3();
// Hello world

var greet4 = require('./greet4');
greet4.greet();
greet4.greeting = 'Changed hello world';
// Hello world!!!

var greet4b = require('./greet4');
greet4b.greet();
//Changed hello world

var greet5 = require('./greet5');
var grtr = new greet5();
grtr.greet();

var greet6 = require('./greet6').greet;
greet6();
