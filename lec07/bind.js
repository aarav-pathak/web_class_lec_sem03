// Defines a function that logs the execution context ('this') and a formatted string
function greet(city, state, country) { 
  console.log(this); // Logs the 'this' context of the function
  console.log('hi'); // Logs a simple greeting string
  console.log(`he belongs to city : ${city} of state: ${state} in country : ${country}`); // Logs location using template literals

  this.name='aaravix'
  console.log(this)
} 

// Creates an object containing personal details
const user = {
  name: 'Browser',
  sec: 'Alpha',
  phn: 9984
};

// .bind() creates a new function copy, locks 'this' to 'user', and pre-fills the three arguments
let bindgreet = greet.bind(user, 'gazi', 'up', 'ind'); 

console.log(bindgreet); // Logs the newly created bound function definition itself

bindgreet(); // Invokes bound function: 'this' points to 'user', uses pre-filled location parameters

greet(); // Invokes original function: 'this' defaults to global window/undefined, parameters are undefined

/*
HOW IT WORKS:
1. greet.bind(user, ...) returns a brand-new exotic function object wrapper without executing the original code immediately.
2. The first argument of .bind() permanently binds the internal [[BoundThis]] property of the new function to the 'user' object.
3. The remaining arguments ('gazi', 'up', 'ind') are stored in the internal [[BoundArgs]] list, permanently pre-filling the function parameters.
4. Calling bindgreet() executes the target function using those stored [[BoundThis]] and [[BoundArgs]] properties.
5. Calling greet() directly bypasses this wrapper entirely, running in the default context where 'this' refers to the global object (or undefined in strict mode).
*/
console.log(user)
bindgreet('luck','up','pak')