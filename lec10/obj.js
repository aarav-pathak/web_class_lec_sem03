sum=()=>{
   console.log('hi')
}

function small(){
    console.log('small')
}

console.log(sum.__proto__)
console.log(small.__proto__


)


console.log(Number.prototype)

let a=23.343434

console.log(a.toFixed(2));

Number.prototype.toFixex=(x)=>{
    console.log(x*x);
    return 'mausi si ga**d';
}

console.log(a.toFixex(2));