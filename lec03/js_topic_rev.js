//destructuring..

// 1. DIRECT REFERENCE ASSIGNMENT
let obj1 = { name: 'aarav', details: { role: 'admin' } };
let std1 = obj1; 

console.log(std1 === obj1);           
// => true  (Why: No copy was made. Both variables point to the exact same address in memory.)

console.log(std1.details === obj1.details); 
// => true  (Why: They share the same top-level object, so they naturally share its inner properties too.)


// 2. SHALLOW COPY (Spread Operator)
let obj2 = { name: 'aarav', details: { role: 'admin' } };
let std2 = { ...obj2 }; 

console.log(std2 === obj2);           
// => false (Why: The spread operator created a brand new top-level container object in memory.)

console.log(std2.details === obj2.details); 
// => true  (Why: JavaScript only copied the reference address of the 'details' object, not the object itself.)


// 3. DEEP COPY (structuredClone)
let obj3 = { name: 'aarav', details: { role: 'admin' } };
let std3 = structuredClone(obj3); 

console.log(std3 === obj3);           
// => false (Why: A completely brand new top-level object was created in memory.)

console.log(std3.details === obj3.details); 
// => false (Why: Every single nested structure was recursively duplicated into a brand new memory location.)



// std = obj: 0% Copy (Shared reference. Any change affects both).
// std = {...obj}: Shallow Copy (New top-level object, shared inner objects).
// std = structuredClone(obj): Deep Copy (100% independent clone)

