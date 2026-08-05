// 1. Initializing the Promise
const firstPromise = new Promise((resolve, reject) => {
  let scc = true; // Toggle to false to test the .catch() block
  let httpsovj = { name: "aarya", age: 20 };

  if (scc) {
    resolve("complt stage 1"); // Resolution jumps to the 1st .then()
  } else {
    reject("failed stage 1");  // Rejection skips all .then() blocks and jumps to .catch()
  }
});

// 2. Executing the Chain
firstPromise
  .then((res) => {
    // RUNS ONLY IF firstPromise calls resolve()
    console.log("Success 1:", res); 
    
    // Returning a new Promise pauses the chain for 1000ms
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("second task compl"); 
      }, 1000);
    });
  })
  .then((secondRes) => {
    // RUNS ONLY IF the Promise inside the 1st .then() calls resolve()
    console.log("Success 2:", secondRes); 
  })
  .catch((error) => {
    // RUNS ONLY IF an error occurs ANYWHERE above in the chain
    // Captures both initial rejections and runtime errors
    console.error("Error Caught:", error); 
  })
  .finally(() => {
    // RUNS ALWAYS at the very end of the execution
    // Independent of whether the chain succeeded or failed
    console.log("Operation Finished: Cleanup complete."); 
  });
