var greet = () => {
  console.log('hello');
};

module.exports = greet;

// require is a function, that you pass 'path' too
// module.exports is what the require function returns
// this works because your code is actually wrapped in a function that is given these things as function parameters
