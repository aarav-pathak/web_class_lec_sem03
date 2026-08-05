//call apply bind( function borrowing..)

function payment(amnt){

    console.log(`payment completed.. of amnt ${amnt}`)
    console.log(this);
    this.name='user pay'
}



let obj1={
    name:'Aarav',
    age:'20'
}


let obj2={
    name:'Broski',
    age:'20'
}


let obj3={
    name:'REalism',
    age:'20'
}



payment.call(obj3,5000)
console.log(obj3)


// function greet(){

//     console.log(this);
// }

// const user={
//     name:'Aarav',
//     age:20
// }

// greet.call(user); // now here this referes to user using call and manipulating the og global objc..