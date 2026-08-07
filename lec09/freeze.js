const user = {
  name: "Alice",
  age: 25
};

// Freeze the object
Object.freeze(user);

// 1. Attempting to modify a property
user.age = 26; 

// 2. Attempting to add a new property
user.role = "Admin"; 

// 3. Attempting to delete a property
delete user.name;

console.log(user); 
// Output: { name: "Alice", age: 25 } (No changes were applied)
