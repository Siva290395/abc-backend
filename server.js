const express = require('express')
const app = express()

app.get('/',(req,res)=>{
 res.send("sivakumar  Running backend Successfully")
})

app.listen(5000)
