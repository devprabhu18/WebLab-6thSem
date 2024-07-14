const express=require('express');
const app=express();
const port=1337;

app.get('/',(req,res)=>{
    res.send("<h1>Hellow World!!</h1>");
});
app.listen(port,()=>{
    console.log(`The app is listening at the port ${port}`);
});