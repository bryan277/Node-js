function Person(fn, ln) {
  this.fn = fn;
  this.ln = ln;
}

Person.prototype.greet = function() {
  console.log('Hello, ' + this.fn + ' ' + this.ln);
};

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john._proto_);
