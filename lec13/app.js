const express=require('express');
const app=express();

const isAuthenticated=require('./middleware/auth_middleware')

const port=3000;

app.get ('/',(req,res)=>{
    console.log('flipkart route end')
    res.send('home route')
});

// app.use((req,res,next)=>{
//     console.log('middleware 1');
//     next();

// });

app.get('/dashboard',(req,res)=>{
    console.log('dashbord protected route');
    res.send('dashboard')
})

app.get('/payment',isAuthenticated,(req,res)=>{
    console.log('payment protected route');
    res.send('payment')
})


app.listen(port,()=>{

    console.log('server is running at port : 3000')

})