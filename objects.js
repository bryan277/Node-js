var person = {
  fn: 'John',
  ln: 'Doe',
  greet: function() {
    console.log('Hello ' + this.fn + ' ' + this.ln);
  }
};

person.greet();
console.log(person['fn']);
// Hello John Doe
// John
