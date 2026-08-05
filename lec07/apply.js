let obj1 = { name: 'Mohan', city: 'Banda' };
let obj2 = { name: 'Rashtriya', city: 'Ghaziabad' };
let obj3 = { name: 'Rashna', city: 'Delhi' };

// Rest operator (...) gathers all arguments into an array named 'args'
function greet(...args) {
    // Extract values from the args array using index positions
    let vill = args[1];
    let caste = args[3];

    console.log(this);
    console.log(this.city); 
    console.log(vill);

    this.payment = true;
    console.log(`Thank you for the payment by ${caste} for ${vill}`);
}

let arr = ['uzebikstaan', 'dasna', '2598**', 'brahman'];

// Call the function and spread the array elements as separate arguments
greet.call(obj3, ...arr);

console.log(obj3);
