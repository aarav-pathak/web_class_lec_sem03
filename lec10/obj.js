sum = () => {
    console.log('hi')
}

function small() {
    console.log('small')
}

console.log(sum.__proto__)
console.log(small.__proto__


)


console.log(Number.prototype)

let a = 23.343434

console.log(a.toFixed(2));

Number.prototype.toFixex = (x) => {
    console.log(x * x);
    return 'mausi si ga**d';
}

console.log(a.toFixex(2));


Number.prototype.hibitch = (x) => {
    return x * x * x * x;
}

let x = 4;
console.log(x.hibitch(x));
Object.prototype.payment = () => {
    return true;
}

let aarav = "mirai fees"
console.log(aarav.__proto__.payment());


console.log(aarav instanceof String);