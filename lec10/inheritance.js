// ==========================================
// 1. .prototype vs .__proto__
// ==========================================

class Animal {
  eat() { console.log('eating...'); }
}

class Dog extends Animal {
  bark() { console.log('barking...'); }
}

const charlie = new Dog();

// `.prototype` exists on Constructor Functions/Classes (The Blueprint)
console.log(Dog.prototype); // Object containing { constructor: f, bark: f }

// `.__proto__` exists on instances (The Link pointing back to the Blueprint)
console.log(charlie.__proto__); // Same object containing { constructor: f, bark: f }

// They reference the exact same object in memory:
console.log(charlie.__proto__ === Dog.prototype); // true


// ==========================================
// 2. Traversing the Prototype Chain to `null`
// ==========================================

console.log("--- PROTOTYPE CHAIN TRAVERSAL ---");

console.log(charlie.__proto__);                              // Level 1: Dog.prototype
console.log(charlie.__proto__.__proto__);                    // Level 2: Animal.prototype
console.log(charlie.__proto__.__proto__.__proto__);          // Level 3: Object.prototype
console.log(charlie.__proto__.__proto__.__proto__.__proto__); // Level 4: null (End of chain)

console.log(String.prototype)
console.log(Number.prototype)
console.log(Object.prototype)
console.log(Boolean.prototype)
console.log(Number.prototype.__proto__===Object.prototype)


let str="aarav pathak";

let str1=new String ('aarav pathak');
console.log(str1.toUpperCase())


