let fact = (n) => {
    let ans = 1;
    for (let i = 1; i <= n; i++) ans *= i;
    return ans;
}

let memoi = (fn) => {
    let cache = {};

    return function(n) {
        // Safe check for existing keys, even if the value is 0 or false
        if (cache[n] !== undefined) {
            console.log("Already present in cache so displaying from cache");
            return cache[n];
        }

        console.log("calculating not in cache");
        let ans = fn(n);
        return cache[n] = ans;
    }
}

let myfact = memoi(fact);
console.log(myfact(5)); // Calculating... -> 120
console.log(myfact(5)); // From cache! -> 120


// *******************************************************************************
//  * HOW IT WORKS (STEP-BY-STEP EXECUTION FLOW)
//  *******************************************************************************
//  * 
//  * 1. INITIALIZATION:
//  *    - `let myfact = memoi(fact);` is called.
//  *    - Inside `memoi`, an empty `cache` object `{}` is created in memory.
//  *    - `memoi` returns the inner anonymous function `function(n) { ... }`.
//  *    - Because of JavaScript "Closures", this returned function permanently 
//  *      remembers and has access to that specific `cache` object.
//  *    - `myfact` now holds a reference to this inner function.
//  * 
//  * 2. FIRST CALL - console.log(myfact(5)):
//  *    - The inner function runs with `n = 5`.
//  *    - It checks `if (cache[5] !== undefined)`. Since the cache is empty, 
//  *      this is false.
//  *    - It prints: "calculating not in cache".
//  *    - It runs `fn(5)` (which is your `fact(5)` function).
//  *    - `fact(5)` loops and calculates the answer: `120`.
//  *    - `cache[5] = ans` saves `120` into the cache. The cache is now `{ 5: 120 }`.
//  *    - The function returns `120`, which gets printed to the console.
//  * 
//  * 3. SECOND CALL - console.log(myfact(5)):
//  *    - The inner function runs again with `n = 5`.
//  *    - It checks `if (cache[5] !== undefined)`.
//  *    - This time, `cache[5]` exists and holds the value `120`. The condition is true.
//  *    - It prints: "Already present in cache so displaying from cache".
//  *    - It immediately returns `120` from the cache object.
//  *    - The heavy `fact` loop is completely skipped, saving processing time.
//  * 
//  *******************************************************************************