const express = require('express')
const app = express()

app.get('/',(req,res)=>{
 res.send("kavin Running backend Successfully")
})

app.listen(5000)
