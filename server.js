const express=require('express')
const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello word")
})
app.use('/',require('./router/router'))

app.listen(5001,()=>{
    console.log(`listen ${5001}`);
})