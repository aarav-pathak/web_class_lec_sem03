const isAuthenticated=(req,res,next)=>{
console.log('auth middleware');
res.cookie('username','aarav')
res.cookie('count',5)
next();
}

module.exports=isAuthenticated