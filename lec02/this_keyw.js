
let obj = {

    name: 'Aarav',
    age: 22,
    city: 'Banda',
    country: 'IN',


    displayInfo: function() {
        // 'this' refers to the object currently calling the method (which is 'obj')
        // This will print the entire object structure to the console
        console.log(this)
        return this;
    }
}

// 1. INVOKING THE METHOD
// The () parenthesis executes the function. 
// Because it is called as 'obj.displayInfo()', 'this' inside the function points to 'obj'.
// Output: The full 'obj' object.
obj.displayInfo();

// 2. REFERENCING THE FUNCTION PROPERTY
// No () parenthesis means the function is NOT executed.
// Instead, it treats 'displayInfo' like a regular property and reads its value.
// Output: The actual raw function definition text.
console.log(obj.displayInfo)

// 3. LOOPING THROUGH THE OBJECT

for(let key in obj) {
    // 
    console.log(key + ':=>' + obj[key])
}
