console.log('before promise')

setTimeout(()=>{
  console.log('inside set timeout')
},1000)

let p1 = new Promise((res, rej) => { 
  setTimeout(() => { 
    res('Promise 1 resolved'); 
  }, 1000); 
}); 

p1.then((val) => { 
  console.log(val); 
}).catch((err) => { 
  console.log(err); 
});


console.log('after promise')
