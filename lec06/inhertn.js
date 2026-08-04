class Animal{
    #a=95;

    eat(){
        console.log('Eating..')

    }
    die(){
        console.log('dead')
    }

}

class Dog extends Animal{
    bark(){
        console.log("barking..")
    }
}

const dog=new Dog();

console.log(dog)


// The text Dog {#a: 95} appearing in your console confirms that your JavaScript engine is working correctly. It does not mean your Dog class has successfully inherited or accessed the private variable.
// Here is exactly why the console displays it this way:
// ## 1. Private Fields Are Stored on the Instance
// When you create an instance of a subclass (const dog = new Dog()), JavaScript constructs a single object in memory.

// * The #a variable belongs strictly to the Animal part of that object.
// * Because a Dog is an Animal, that private slot physically exists inside the memory space of the dog object.
// * The console inspector looks directly at the raw memory of the object, which is why it displays #a: 95.

// ## 2. The DevTools "God Mode"
// Your browser's developer tools act as a privileged debugger.

// * The console bypasses JavaScript's normal security rules just to show you what is inside the object's memory.
// * It shows #a so you can debug your Animal state.
// * It shows [[Prototype]] to show your inheritance chain.
// * Neither of these internal values can actually be touched by your code.

// ## 3. The Ultimate Proof
// The ultimate test of access is whether your code can read it. If you try to run this line in your script:

// console.log(dog.#a); 

// The browser will instantly block it and throw an error: SyntaxError: Private field '#a' must be declared in an enclosing class. The console can look at it, but your Dog class is completely blind to it.
// If you want to see how to properly share data between parent and child classes, let me know. I can show you how to use protected patterns or public properties instead.

