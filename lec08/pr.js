let x=new  Promise((res,rej)=>{
    let k=1;

    let httpsobj={
        name:'aarya',
        age:20
    }
    if(k){
    res(httpsobj);
    }
    else{
        rej('Some error occured bitch');
    }

});

x.then((data)=>{

    console.log(data);

}).then(
    ()=>{
        console.log('all good')
    }

).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('op is successfully comple')
})

// console.log(x); //Promise { 'Payment done..' }
// console.log(typeof x) //obj