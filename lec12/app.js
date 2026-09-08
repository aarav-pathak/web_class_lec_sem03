const express= require('express');
const app=express();


app.use(express.json());

app.use((req,res,next)=>{
    console.log('middleware 1');
    next();
})

app.use(express.urlencoded({extended:true}));

app.use((err,req,res,next)=>{
    console.log('error')

    res.status(500).send('Internal Server Error')
    // next()

});

app.use((req,res,next)=>{

    res.status(404).send("Page Not Found")
    next()

})



const port=3000;

app.get('/',(req,res)=>{
    res.send('hi')
     console.log(req.body)
     console.log(req.ip)
     console.log(req.hostname)

     console.log(req.params)
     console.log(req.query)
     console.log(req.path)

})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})




